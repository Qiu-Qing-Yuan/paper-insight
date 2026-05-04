import type { Paper, Progress, Conference } from './types'

// Auto-detect: if /api/papers returns 404, use static JSON files
let useStatic = false

async function checkStaticMode() {
  try {
    const r = await fetch('/api/papers', { method: 'HEAD' })
    if (!r.ok) useStatic = true
  } catch {
    useStatic = true
  }
}

// Run check once on module load
const staticCheck = checkStaticMode()

export async function fetchPapers(): Promise<Paper[]> {
  await staticCheck
  if (useStatic) {
    const r = await fetch('/data/papers.json')
    return r.json()
  }
  const r = await fetch('/api/papers')
  if (!r.ok) throw new Error('HTTP ' + r.status)
  return r.json()
}

export async function fetchKeywords(lang: string, sub?: string): Promise<[string, number][]> {
  await staticCheck
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
  await staticCheck
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
  await staticCheck
  if (useStatic) {
    const r = await fetch(`/data/external-${conference}-${year}.json`)
    if (!r.ok) return []
    return r.json()
  }
  const r = await fetch(`/api/external/papers/${conference}?year=${year}`)
  if (!r.ok) throw new Error('HTTP ' + r.status)
  return r.json()
}

export async function fetchAllExternalPapers(): Promise<Paper[]> {
  const r = await fetch('/api/external/all')
  if (!r.ok) throw new Error('HTTP ' + r.status)
  return r.json()
}

export async function triggerExternalUpdate(conference: string, year: number = 2024): Promise<{ status: string }> {
  await staticCheck
  if (useStatic) {
    // In static mode, fetch directly from the serverless function
    const r = await fetch(`/api/external?conference=${conference}&year=${year}`)
    if (r.ok) {
      const papers = await r.json()
      // Store in localStorage for persistence
      localStorage.setItem(`external_${conference}_${year}`, JSON.stringify(papers))
    }
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
