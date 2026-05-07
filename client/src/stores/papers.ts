import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Paper, Conference } from '../types'
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

  // Multi-conference state
  const activeConference = ref<string>('ACL')
  const activeConferenceKey = ref<string>('ACL-2025')
  const conferences = ref<Conference[]>([])
  const externalLoading = ref(false)

  const mainCount = computed(() => papers.value.filter(p =>
    p.venue?.startsWith('主会') || ['Oral', 'Spotlight', 'Poster'].includes(p.venue)
  ).length)
  const oralCount = computed(() => papers.value.filter(p => p.venue === 'Oral').length)
  const spotlightCount = computed(() => papers.value.filter(p => p.venue === 'Spotlight').length)
  const posterCount = computed(() => papers.value.filter(p => p.venue === 'Poster').length)
  const longPaperCount = computed(() => papers.value.filter(p => p.venue === '主会-长文').length)
  const shortPaperCount = computed(() => papers.value.filter(p => p.venue === '主会-短文').length)
  const findingsCount = computed(() => papers.value.filter(p => p.venue === 'Findings').length)
  const workshopCount = computed(() => papers.value.filter(p => p.venue?.startsWith('Workshop')).length)
  const translatedCount = computed(() => papers.value.filter(p => p.abstract_zh).length)
  const hasVenueTypes = computed(() => mainCount.value > 0 || findingsCount.value > 0 || workshopCount.value > 0)

  function getSubName(zhName: string): string {
    return lang.value === 'en' ? (SUBCATEGORY_EN[zhName] || zhName) : zhName
  }

  function getVenueClass(venue: string): string {
    if (!venue) return 'venue-other'
    if (venue.startsWith('主会') || ['Oral', 'Spotlight', 'Poster'].includes(venue)) return 'venue-main'
    if (venue === 'Findings') return 'venue-findings'
    if (venue.startsWith('Workshop')) return 'venue-workshop'
    return 'venue-other'
  }

  function getVenueLabel(venue: string): string {
    if (!venue) return '未知'
    if (venue === '主会-长文') return '长文'
    if (venue === '主会-短文') return '短文'
    return venue
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

  async function loadPapers() {
    loading.value = true
    error.value = null
    try {
      const data = await api.fetchPapers()
      buildCategories(data)
      aclPapers.value = data
      if (activeConference.value === 'ACL') {
        papers.value = data
      }
    } catch (e: any) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  }

  async function loadConferences() {
    try {
      conferences.value = await api.fetchConferences()
    } catch { /* ignore */ }
  }

  async function switchConference(conference: string, year?: number) {
    activeConference.value = conference
    activeConferenceKey.value = year ? `${conference}-${year}` : conference

    if (conference === 'ACL' && (!year || year === 2025)) {
      papers.value = aclPapers.value
      buildCategories(aclPapers.value)
      return
    }

    externalLoading.value = true
    try {
      const data = await api.fetchExternalPapers(conference, year || 2024)
      if (data.length > 0) {
        externalPapers.value = data
        papers.value = data
        buildCategories(data)
      }
    } catch (e: any) {
      error.value = e.message
    } finally {
      externalLoading.value = false
    }
  }

  return {
    papers, aclPapers, categories, subcategories, catSubMap,
    lang, loading, error,
    mainCount, oralCount, spotlightCount, posterCount,
    longPaperCount, shortPaperCount,
    findingsCount, workshopCount, translatedCount, hasVenueTypes,
    activeConference, activeConferenceKey, conferences, externalLoading,
    getSubName, getVenueClass, getVenueLabel, loadPapers,
    loadConferences, switchConference,
  }
})
