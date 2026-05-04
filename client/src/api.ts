import type { Paper, Progress, Conference } from './types'

// Production builds (Vercel) use static JSON; dev uses Express API
const useStatic = import.meta.env.PROD

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

export async function fetchPapers(): Promise<Paper[]> {
  if (useStatic) {
    const r = await fetch('/data/papers.json')
    return r.json()
  }
  const r = await fetch('/api/papers')
  if (!r.ok) throw new Error('HTTP ' + r.status)
  return r.json()
}

export async function queryPapers(params: QueryParams): Promise<PaginatedResult> {
  const qs = new URLSearchParams()
  if (params.page) qs.set('page', String(params.page))
  if (params.limit) qs.set('limit', String(params.limit))
  if (params.category) qs.set('category', params.category)
  if (params.subcategory) qs.set('subcategory', params.subcategory)
  if (params.venue) qs.set('venue', params.venue)
  if (params.search) qs.set('search', params.search)
  if (params.sort) qs.set('sort', params.sort)

  const url = `/api/papers?${qs.toString()}`
  const r = await fetch(url)
  if (!r.ok) throw new Error('HTTP ' + r.status)
  return r.json()
}

export async function fetchFilterOptions(): Promise<FilterOptions> {
  const r = await fetch('/api/filters')
  if (!r.ok) throw new Error('HTTP ' + r.status)
  return r.json()
}

export async function fetchKeywords(lang: string, sub?: string): Promise<[string, number][]> {
  if (useStatic) {
    const r = await fetch(`/data/keywords-${lang}.json`)
    return r.json()
  }
  let url = '/api/keywords?lang=' + lang
  if (sub && sub !== 'all') url += '&sub=' + encodeURIComponent(sub)
  const r = await fetch(url)
  if (!r.ok) throw new Error('HTTP ' + r.status)
  return r.json()
}

export async function refreshCache(): Promise<{ status: string }> {
  if (useStatic) return { status: 'ok' }
  const r = await fetch('/api/refresh')
  if (!r.ok) throw new Error('HTTP ' + r.status)
  return r.json()
}

export async function fetchProgress(): Promise<Progress> {
  if (useStatic) return { status: 'done', current: 100, total: 100, message: '', percent: 100 }
  const r = await fetch('/api/progress')
  if (!r.ok) throw new Error('HTTP ' + r.status)
  return r.json()
}

// ===== External conference APIs =====

export async function fetchConferences(): Promise<Conference[]> {
  if (useStatic) {
    return [
      {
        id: 'ICML', name: 'ICML', years: [2024, 2025], description: 'International Conference on Machine Learning',
        entries: [
          { year: 2024, key: 'ICML-2024', paperCount: 0, lastUpdated: null, status: 'not_loaded' },
          { year: 2025, key: 'ICML-2025', paperCount: 0, lastUpdated: null, status: 'not_loaded' },
        ]
      },
      {
        id: 'EMNLP', name: 'EMNLP', years: [2024, 2025], description: 'Empirical Methods in Natural Language Processing',
        entries: [
          { year: 2024, key: 'EMNLP-2024', paperCount: 0, lastUpdated: null, status: 'not_loaded' },
          { year: 2025, key: 'EMNLP-2025', paperCount: 0, lastUpdated: null, status: 'not_loaded' },
        ]
      },
      {
        id: 'NeurIPS', name: 'NeurIPS', years: [2024, 2025], description: 'Neural Information Processing Systems',
        entries: [
          { year: 2024, key: 'NeurIPS-2024', paperCount: 0, lastUpdated: null, status: 'not_loaded' },
          { year: 2025, key: 'NeurIPS-2025', paperCount: 0, lastUpdated: null, status: 'not_loaded' },
        ]
      },
    ]
  }
  const r = await fetch('/api/external/conferences')
  if (!r.ok) throw new Error('HTTP ' + r.status)
  return r.json()
}

export async function fetchExternalPapers(conference: string, year: number = 2024): Promise<Paper[]> {
  if (useStatic) {
    // Fetch from Vercel serverless function
    try {
      const r = await fetch(`/api/external?conference=${conference}&year=${year}`)
      if (!r.ok) return []
      return r.json()
    } catch { return [] }
  }
  const r = await fetch(`/api/external/papers/${conference}?year=${year}`)
  if (!r.ok) throw new Error('HTTP ' + r.status)
  return r.json()
}

export async function fetchAllExternalPapers(): Promise<Paper[]> {
  if (useStatic) return []
  const r = await fetch('/api/external/all')
  if (!r.ok) throw new Error('HTTP ' + r.status)
  return r.json()
}

export async function triggerExternalUpdate(conference: string, year: number = 2024): Promise<{ status: string }> {
  if (useStatic) {
    // In static mode, the serverless function fetches on demand
    return { status: 'ok' }
  }
  const r = await fetch(`/api/external/update/${conference}?year=${year}`)
  if (!r.ok) throw new Error('HTTP ' + r.status)
  return r.json()
}

export async function fetchExternalProgress(conference: string, year: number = 2024): Promise<Progress> {
  if (useStatic) {
    return { status: 'ready', current: 100, total: 100, message: '加载完成', percent: 100 }
  }
  const r = await fetch(`/api/external/progress/${conference}?year=${year}`)
  if (!r.ok) throw new Error('HTTP ' + r.status)
  return r.json()
}
