export interface Paper {
  id: string
  title: string
  authors: string[]
  venue: string
  abstract_en?: string
  abstract_zh?: string
  category?: string
  subcategory?: string
  source?: string
  year?: number
  pdf_url?: string
}

export interface Progress {
  status: 'idle' | 'loading' | 'done' | 'error' | 'ready'
  current: number
  total: number
  message: string
  percent: number
}

export interface FilterState {
  category: string
  subcategory: string
  venue: string
  search: string
}

export interface ConferenceEntry {
  year: number
  key: string
  paperCount: number
  lastUpdated: string | null
  status: 'not_loaded' | 'fetching' | 'cached' | 'ready' | 'error'
}

export interface Conference {
  id: string
  name: string
  years: number[]
  description: string
  entries: ConferenceEntry[]
}
