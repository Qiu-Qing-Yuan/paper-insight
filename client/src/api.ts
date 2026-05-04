import type { Paper, Progress, Conference } from './types'

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

// ===== 分页查询（客户端筛选 + 分页） =====
export async function queryPapers(params: QueryParams): Promise<PaginatedResult> {
  let data = await loadAllPapers()

  // 筛选
  if (params.category) data = data.filter(p => p.category === params.category)
  if (params.subcategory) data = data.filter(p => p.subcategory === params.subcategory)
  if (params.venue) {
    if (params.venue === '主会') data = data.filter(p => p.venue?.startsWith('主会'))
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

// ===== 论文列表（全量，用于其他页面） =====
export async function fetchPapers(): Promise<Paper[]> {
  return loadAllPapers()
}

export async function fetchKeywords(lang: string, sub?: string): Promise<[string, number][]> {
  const r = await fetch(`/data/keywords-${lang}.json`)
  return r.json()
}

export async function refreshCache(): Promise<{ status: string }> {
  // 静态模式无需刷新
  return { status: 'ok' }
}

export async function fetchProgress(): Promise<Progress> {
  return { status: 'done', current: 100, total: 100, message: '', percent: 100 }
}

// ===== 外部会议 =====

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

export async function fetchAllExternalPapers(): Promise<Paper[]> {
  return []
}

export async function triggerExternalUpdate(conference: string, year: number = 2024): Promise<{ status: string }> {
  return { status: 'ok' }
}

export async function fetchExternalProgress(conference: string, year: number = 2024): Promise<Progress> {
  return { status: 'ready', current: 100, total: 100, message: '加载完成', percent: 100 }
}
