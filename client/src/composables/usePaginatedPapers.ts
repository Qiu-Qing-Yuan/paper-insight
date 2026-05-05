import { ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePapersStore } from '../stores/papers'
import type { Paper } from '../types'
import { queryPapers, computeFilterOptions } from '../api'
import type { FilterOptions } from '../api'

export function usePaginatedPapers() {
  const route = useRoute()
  const router = useRouter()
  const store = usePapersStore()

  // Filter state
  const category = ref('')
  const subcategory = ref('')
  const venue = ref('')
  const search = ref('')
  const sortBy = ref('default')
  const page = ref(1)
  const limit = 20

  // Results
  const papers = ref<Paper[]>([])
  const total = ref(0)
  const totalPages = ref(0)
  const loading = ref(false)

  // Filter options computed from current conference data
  const filterOptions = ref<FilterOptions | null>(null)

  function updateFilterOptions() {
    if (store.papers.length > 0) {
      filterOptions.value = computeFilterOptions(store.papers)
    }
  }

  // Fetch papers with current filters
  async function fetchPage() {
    loading.value = true
    try {
      const result = await queryPapers({
        page: page.value,
        limit,
        category: category.value,
        subcategory: subcategory.value,
        venue: venue.value,
        search: search.value,
        sort: sortBy.value === 'default' ? '' : sortBy.value,
      }, store.papers)
      papers.value = result.items
      total.value = result.total
      totalPages.value = result.totalPages
      page.value = result.page
    } catch (e) {
      console.error('Failed to fetch papers:', e)
    } finally {
      loading.value = false
    }
  }

  // Sync URL query params
  function syncToUrl() {
    const q: Record<string, string> = {}
    if (category.value) q.category = category.value
    if (subcategory.value) q.subcategory = subcategory.value
    if (venue.value) q.venue = venue.value
    if (search.value) q.search = search.value
    if (page.value > 1) q.page = String(page.value)
    router.replace({ query: q })
  }

  // Read from URL on mount
  function syncFromUrl() {
    if (route.query.category) category.value = route.query.category as string
    if (route.query.subcategory) subcategory.value = route.query.subcategory as string
    if (route.query.venue) venue.value = route.query.venue as string
    if (route.query.search) search.value = route.query.search as string
    if (route.query.page) page.value = parseInt(route.query.page as string) || 1
  }

  // Apply filter and reset to page 1
  function applyFilter() {
    page.value = 1
    syncToUrl()
    fetchPage()
  }

  // Apply sort
  function applySort() {
    page.value = 1
    fetchPage()
  }

  // Reset all filters
  function resetFilter() {
    category.value = ''
    subcategory.value = ''
    venue.value = ''
    search.value = ''
    sortBy.value = 'default'
    page.value = 1
    syncToUrl()
    fetchPage()
  }

  // Go to specific page
  function goToPage(p: number) {
    page.value = p
    syncToUrl()
    fetchPage()
  }

  // Debounce search
  let searchTimer: ReturnType<typeof setTimeout> | null = null
  function onSearchInput() {
    if (searchTimer) clearTimeout(searchTimer)
    searchTimer = setTimeout(() => {
      applyFilter()
    }, 300)
  }

  // Visible page numbers for pagination
  const visiblePages = ref<number[]>([])
  watch([page, totalPages], () => {
    const pages: number[] = []
    const start = Math.max(1, page.value - 2)
    const end = Math.min(totalPages.value, page.value + 2)
    for (let i = start; i <= end; i++) pages.push(i)
    visiblePages.value = pages
  })

  // Re-fetch when conference changes
  watch(() => store.papers, () => {
    updateFilterOptions()
    // Reset filters when conference changes
    category.value = ''
    subcategory.value = ''
    venue.value = ''
    search.value = ''
    sortBy.value = 'default'
    page.value = 1
    fetchPage()
  })

  onMounted(async () => {
    syncFromUrl()
    updateFilterOptions()
    await fetchPage()
  })

  return {
    category, subcategory, venue, search, sortBy,
    page, total, totalPages, loading, papers,
    filterOptions, visiblePages,
    applyFilter, applySort, resetFilter, goToPage, onSearchInput,
  }
}
