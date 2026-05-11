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

  // Fine-grained counts
  const oralCount = computed(() => papers.value.filter(p => p.venue === 'Oral').length)
  const spotlightCount = computed(() => papers.value.filter(p => p.venue === 'Spotlight').length)
  const posterCount = computed(() => papers.value.filter(p => p.venue === 'Poster').length)
  const longPaperCount = computed(() => papers.value.filter(p => p.venue === '主会-长文').length)
  const shortPaperCount = computed(() => papers.value.filter(p => p.venue === '主会-短文').length)
  const findingsCount = computed(() => papers.value.filter(p => p.venue === 'Findings').length)
  const workshopCount = computed(() => papers.value.filter(p => p.venue?.startsWith('Workshop')).length)
  const demoCount = computed(() => papers.value.filter(p => p.venue === '系统演示').length)
  const studentCount = computed(() => papers.value.filter(p => p.venue === '学生研讨会').length)
  const tutorialCount = computed(() => papers.value.filter(p => p.venue === '教程').length)
  const industryCount = computed(() => papers.value.filter(p => p.venue === '工业Track').length)

  // Grouped counts
  const mainCount = computed(() => papers.value.filter(p =>
    p.venue?.startsWith('主会') || ['Oral', 'Spotlight', 'Poster'].includes(p.venue)
  ).length)
  const otherCount = computed(() => demoCount.value + studentCount.value + tutorialCount.value + industryCount.value)
  const translatedCount = computed(() => papers.value.filter(p => p.abstract_zh).length)
  const hasVenueTypes = computed(() => mainCount.value > 0 || findingsCount.value > 0 || workshopCount.value > 0)
  const isOpenReview = computed(() => ['ICML', 'ICLR', 'NeurIPS'].includes(activeConference.value))

  // Conference-appropriate venue filter options
  const venueFilterOptions = computed(() => {
    const opts: { value: string; label: string; group?: string }[] = []
    if (isOpenReview.value) {
      if (oralCount.value > 0) opts.push({ value: 'Oral', label: `Oral (${oralCount.value})` })
      if (spotlightCount.value > 0) opts.push({ value: 'Spotlight', label: `Spotlight (${spotlightCount.value})` })
      if (posterCount.value > 0) opts.push({ value: 'Poster', label: `Poster (${posterCount.value})` })
    } else {
      if (mainCount.value > 0) opts.push({ value: '主会', label: `主会 (${mainCount.value})` })
      if (findingsCount.value > 0) opts.push({ value: 'Findings', label: `已收录 (${findingsCount.value})` })
      if (otherCount.value > 0) {
        opts.push({ value: '其他', label: `其他 (${otherCount.value})` })
        if (industryCount.value > 0) opts.push({ value: '工业Track', label: `工业 (${industryCount.value})`, group: '其他' })
        if (demoCount.value > 0) opts.push({ value: '系统演示', label: `演示 (${demoCount.value})`, group: '其他' })
        if (studentCount.value > 0) opts.push({ value: '学生研讨会', label: `学生 (${studentCount.value})`, group: '其他' })
        if (tutorialCount.value > 0) opts.push({ value: '教程', label: `教程 (${tutorialCount.value})`, group: '其他' })
      }
    }
    if (workshopCount.value > 0) opts.push({ value: 'Workshop', label: `研讨会 (${workshopCount.value})` })
    return opts
  })

  function getSubName(zhName: string): string {
    return lang.value === 'en' ? (SUBCATEGORY_EN[zhName] || zhName) : zhName
  }

  function getVenueClass(venue: string): string {
    if (!venue) return 'venue-other'
    if (venue.startsWith('主会') || ['Oral', 'Spotlight', 'Poster'].includes(venue)) return 'venue-main'
    if (venue === 'Findings') return 'venue-findings'
    if (venue.startsWith('Workshop')) return 'venue-workshop'
    if (['系统演示', '学生研讨会', '教程', '工业Track'].includes(venue)) return 'venue-workshop'
    return 'venue-other'
  }

  function getVenueLabel(venue: string): string {
    if (!venue) return '未知'
    if (venue === '主会-长文') return '长文'
    if (venue === '主会-短文') return '短文'
    if (venue === 'Findings') return '已收录'
    if (venue.startsWith('Workshop')) return '研讨会'
    if (venue === '工业Track') return '工业'
    if (venue === '系统演示') return '演示'
    if (venue === '学生研讨会') return '学生'
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
    findingsCount, workshopCount, otherCount,
    translatedCount, hasVenueTypes, isOpenReview, venueFilterOptions,
    activeConference, activeConferenceKey, conferences, externalLoading,
    getSubName, getVenueClass, getVenueLabel, loadPapers,
    loadConferences, switchConference,
  }
})
