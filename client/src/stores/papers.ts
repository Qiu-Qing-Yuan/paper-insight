import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Paper, Progress, Conference } from '../types'
import { categorizeDetailed, SUBCATEGORY_EN } from '../utils'
import * as api from '../api'

export const usePapersStore = defineStore('papers', () => {
  const aclPapers = ref<Paper[]>([])
  const externalPapers = ref<Paper[]>([])
  const papers = ref<Paper[]>([])
  const categories = ref<Record<string, number>>({})
  const subcategories = ref<Record<string, number>>({})
  const catSubMap = ref<Record<string, Record<string, number>>>({})
  const lang = ref<'en' | 'zh'>('en')
  const loading = ref(false)
  const error = ref<string | null>(null)
  const progress = ref<Progress>({ status: 'idle', current: 0, total: 0, message: '', percent: 0 })
  let progressTimer: ReturnType<typeof setInterval> | null = null

  // Multi-conference state
  const activeConference = ref<string>('ACL')
  const activeConferenceKey = ref<string>('ACL')
  const conferences = ref<Conference[]>([])
  const externalLoading = ref(false)
  const externalProgress = ref<Progress>({ status: 'idle', current: 0, total: 0, message: '', percent: 0 })
  let externalProgressTimer: ReturnType<typeof setInterval> | null = null
  const externalUpdatingKey = ref<string | null>(null)

  const mainCount = computed(() => papers.value.filter(p => p.venue?.startsWith('主会')).length)
  const findingsCount = computed(() => papers.value.filter(p => p.venue === 'Findings').length)
  const translatedCount = computed(() => papers.value.filter(p => p.abstract_zh).length)

  // Current papers based on active conference
  const currentPapers = computed(() => {
    if (activeConference.value === 'ACL') return aclPapers.value
    return externalPapers.value
  })

  function getSubName(zhName: string): string {
    return lang.value === 'en' ? (SUBCATEGORY_EN[zhName] || zhName) : zhName
  }

  function getVenueClass(venue: string): string {
    if (!venue) return 'venue-other'
    if (venue.indexOf('主会') === 0) return 'venue-main'
    if (venue === 'Findings') return 'venue-findings'
    if (venue.indexOf('Workshop') === 0) return 'venue-workshop'
    return 'venue-other'
  }

  function buildCategories(data: Paper[]) {
    const cats: Record<string, number> = {}
    const subs: Record<string, number> = {}
    const catSub: Record<string, Record<string, number>> = {}

    data.forEach(p => {
      const result = categorizeDetailed(p.title, p.abstract_en || '')
      p.category = result.category
      p.subcategory = result.subcategory
      cats[p.category] = (cats[p.category] || 0) + 1
      subs[p.subcategory] = (subs[p.subcategory] || 0) + 1
      if (!catSub[p.category]) catSub[p.category] = {}
      catSub[p.category][p.subcategory] = (catSub[p.category][p.subcategory] || 0) + 1
    })

    categories.value = cats
    subcategories.value = subs
    catSubMap.value = catSub
  }

  function startProgressPolling() {
    stopProgressPolling()
    progressTimer = setInterval(async () => {
      try {
        const p = await api.fetchProgress()
        progress.value = p
      } catch { /* ignore */ }
    }, 200)
  }

  function stopProgressPolling() {
    if (progressTimer) {
      clearInterval(progressTimer)
      progressTimer = null
    }
  }

  // Load ACL papers (existing logic)
  async function loadPapers(forceRefresh = false) {
    loading.value = true
    error.value = null
    progress.value = { status: 'loading', current: 0, total: 0, message: '正在准备...', percent: 0 }
    startProgressPolling()

    try {
      if (forceRefresh) {
        await api.refreshCache()
      }
      const data = await api.fetchPapers()
      buildCategories(data)
      aclPapers.value = data

      if (activeConference.value === 'ACL') {
        papers.value = data
      }
      progress.value = { status: 'done', current: 100, total: 100, message: '加载完成', percent: 100 }
    } catch (e: any) {
      error.value = e.message
      progress.value = { status: 'error', current: 0, total: 0, message: '加载失败: ' + e.message, percent: 0 }
    } finally {
      loading.value = false
      stopProgressPolling()
    }
  }

  // Load conferences list
  async function loadConferences() {
    try {
      conferences.value = await api.fetchConferences()
    } catch { /* ignore */ }
  }

  // Switch active conference
  async function switchConference(conference: string, year?: number) {
    if (conference === 'ACL') {
      activeConference.value = 'ACL'
      activeConferenceKey.value = 'ACL'
      papers.value = aclPapers.value
      buildCategories(aclPapers.value)
      return
    }

    activeConference.value = conference
    activeConferenceKey.value = year ? `${conference}-${year}` : conference
    externalLoading.value = true

    try {
      const key = year ? `${conference}-${year}` : null
      // Try to get from cache first
      let data = await api.fetchExternalPapers(conference, year || 2024)

      if (data.length > 0) {
        externalPapers.value = data
        papers.value = data
        buildCategories(data)
      } else {
        // No cached data, trigger update
        externalUpdatingKey.value = key
        await api.triggerExternalUpdate(conference, year || 2024)

        // Poll for progress
        await new Promise<void>((resolve) => {
          const timer = setInterval(async () => {
            try {
              const p = await api.fetchExternalProgress(conference, year || 2024)
              externalProgress.value = p
              if (p.status === 'ready' || p.status === 'error' || p.status === 'idle') {
                clearInterval(timer)
                // Reload data
                const freshData = await api.fetchExternalPapers(conference, year || 2024)
                externalPapers.value = freshData
                papers.value = freshData
                buildCategories(freshData)
                externalUpdatingKey.value = null
                resolve()
              }
            } catch {
              clearInterval(timer)
              externalUpdatingKey.value = null
              resolve()
            }
          }, 500)
        })
      }
    } catch (e: any) {
      error.value = e.message
    } finally {
      externalLoading.value = false
    }
  }

  // Trigger external update
  async function updateExternalConference(conference: string, year: number = 2024) {
    const key = `${conference}-${year}`
    externalUpdatingKey.value = key
    externalLoading.value = true

    try {
      await api.triggerExternalUpdate(conference, year)

      // Poll progress
      await new Promise<void>((resolve) => {
        const timer = setInterval(async () => {
          try {
            const p = await api.fetchExternalProgress(conference, year)
            externalProgress.value = p
            if (p.status === 'ready' || p.status === 'error') {
              clearInterval(timer)
              // If this is the active conference, reload
              if (activeConference.value === conference) {
                const data = await api.fetchExternalPapers(conference, year)
                externalPapers.value = data
                papers.value = data
                buildCategories(data)
              }
              // Refresh conferences list
              await loadConferences()
              externalUpdatingKey.value = null
              resolve()
            }
          } catch {
            clearInterval(timer)
            externalUpdatingKey.value = null
            resolve()
          }
        }, 500)
      })
    } catch (e: any) {
      error.value = e.message
    } finally {
      externalLoading.value = false
    }
  }

  return {
    papers, aclPapers, categories, subcategories, catSubMap,
    lang, loading, error, progress,
    mainCount, findingsCount, translatedCount,
    activeConference, activeConferenceKey, conferences, externalLoading, externalProgress, externalUpdatingKey,
    getSubName, getVenueClass, loadPapers,
    loadConferences, switchConference, updateExternalConference,
  }
})
