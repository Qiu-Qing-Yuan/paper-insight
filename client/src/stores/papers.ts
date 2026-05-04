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
  const activeConferenceKey = ref<string>('ACL')
  const conferences = ref<Conference[]>([])
  const externalLoading = ref(false)

  const mainCount = computed(() => papers.value.filter(p => p.venue?.startsWith('主会')).length)
  const findingsCount = computed(() => papers.value.filter(p => p.venue === 'Findings').length)
  const translatedCount = computed(() => papers.value.filter(p => p.abstract_zh).length)

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
    mainCount, findingsCount, translatedCount,
    activeConference, activeConferenceKey, conferences, externalLoading,
    getSubName, getVenueClass, loadPapers,
    loadConferences, switchConference,
  }
})
