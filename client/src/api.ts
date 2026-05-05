import type { Paper, Conference } from './types'
import { extractNounKeywords } from './utils'

export interface ScheduleEntry {
  conf: string
  fullName: string
  year: number
  color: string
  website: string
  dates: { label: string; date: string }[]
  location: string
}

export interface PaginatedResult {
  items: Paper[]
  total: number
  page: number
  totalPages: number
  limit: number
}

export interface FilterOptions {
  categories: Record<string, number>
  subcategories: Record<string, number>
  catSubMap: Record<string, Record<string, number>>
  total: number
}

export interface QueryParams {
  page?: number
  limit?: number
  category?: string
  subcategory?: string
  venue?: string
  search?: string
  sort?: string
}

// ===== 静态数据缓存 =====
let _allPapers: Paper[] | null = null
let _filters: FilterOptions | null = null

async function loadAllPapers(): Promise<Paper[]> {
  if (!_allPapers) {
    const r = await fetch('/data/papers.json')
    _allPapers = await r.json()
  }
  return _allPapers!
}

async function loadFilters(): Promise<FilterOptions> {
  if (!_filters) {
    const r = await fetch('/data/filters.json')
    _filters = await r.json()
  }
  return _filters!
}

// ===== 日程数据（localStorage 缓存，24h TTL） =====
const SCHEDULES_CACHE_KEY = 'acl_schedules_cache'
const SCHEDULES_TTL = 24 * 60 * 60 * 1000

export async function fetchSchedules(): Promise<ScheduleEntry[]> {
  const cached = localStorage.getItem(SCHEDULES_CACHE_KEY)
  if (cached) {
    try {
      const { data, timestamp, version } = JSON.parse(cached)
      if (Date.now() - timestamp < SCHEDULES_TTL) return data
    } catch { /* ignore corrupt cache */ }
  }
  const r = await fetch('/data/schedules.json')
  const json = await r.json()
  localStorage.setItem(SCHEDULES_CACHE_KEY, JSON.stringify({
    data: json.schedules,
    timestamp: Date.now(),
    version: json.version,
  }))
  return json.schedules
}

// ===== 分页查询（客户端筛选 + 分页） =====
export async function queryPapers(params: QueryParams, sourceData?: Paper[]): Promise<PaginatedResult> {
  let data = sourceData || await loadAllPapers()

  // 筛选
  if (params.category) data = data.filter(p => p.category === params.category)
  if (params.subcategory) data = data.filter(p => p.subcategory === params.subcategory)
  if (params.venue) {
    if (params.venue === '主会') data = data.filter(p => p.venue?.startsWith('主会'))
    else if (params.venue === 'Workshop') data = data.filter(p => p.venue?.startsWith('Workshop'))
    else data = data.filter(p => p.venue === params.venue)
  }
  if (params.search) {
    const q = params.search.toLowerCase()
    data = data.filter(p =>
      (p.title || '').toLowerCase().includes(q) ||
      (p.abstract_en || '').toLowerCase().includes(q) ||
      (p.abstract_zh || '').includes(params.search!) ||
      (p.authors || []).some(a => a.toLowerCase().includes(q))
    )
  }

  // 排序
  if (params.sort === 'venue') data.sort((a, b) => (a.venue || '').localeCompare(b.venue || ''))
  else if (params.sort === 'id') data.sort((a, b) => (a.id || '').localeCompare(b.id || ''))
  else if (params.sort === 'title') data.sort((a, b) => (a.title || '').localeCompare(b.title || ''))

  const limit = params.limit || 20
  const total = data.length
  const totalPages = Math.ceil(total / limit)
  const page = Math.max(1, Math.min(params.page || 1, totalPages || 1))
  const start = (page - 1) * limit
  const items = data.slice(start, start + limit)

  return { items, total, page, totalPages, limit }
}

export async function fetchFilterOptions(): Promise<FilterOptions> {
  return loadFilters()
}

export function computeFilterOptions(papers: Paper[]): FilterOptions {
  const categories: Record<string, number> = {}
  const subcategories: Record<string, number> = {}
  const catSubMap: Record<string, Record<string, number>> = {}

  for (const p of papers) {
    const cat = p.category || '其他'
    const sub = p.subcategory || '其他'
    categories[cat] = (categories[cat] || 0) + 1
    subcategories[sub] = (subcategories[sub] || 0) + 1
    if (!catSubMap[cat]) catSubMap[cat] = {}
    catSubMap[cat][sub] = (catSubMap[cat][sub] || 0) + 1
  }

  return { categories, subcategories, catSubMap, total: papers.length }
}

// ===== 论文列表（全量，用于其他页面） =====
export async function fetchPapers(): Promise<Paper[]> {
  return loadAllPapers()
}

export async function fetchKeywords(lang: string, sub?: string, sourceData?: Paper[]): Promise<[string, number][]> {
  if (sub) {
    // Client-side extraction for subcategory filtering
    const papers = sourceData || await loadAllPapers()
    const filtered = papers.filter(p => p.subcategory === sub)
    return extractNounKeywords(filtered, lang as 'en' | 'zh')
  }
  if (sourceData) {
    // Client-side extraction for current conference (non-ACL or filtered view)
    return extractNounKeywords(sourceData, lang as 'en' | 'zh')
  }
  const r = await fetch(`/data/keywords-${lang}.json`)
  return r.json()
}

export async function fetchConferences(): Promise<Conference[]> {
  const r = await fetch('/data/conferences.json')
  if (r.ok) return r.json()
  return []
}

export async function fetchExternalPapers(conference: string, year: number = 2024): Promise<Paper[]> {
  try {
    const r = await fetch(`/data/external-${conference}-${year}.json`)
    if (!r.ok) return []
    return r.json()
  } catch { return [] }
}
