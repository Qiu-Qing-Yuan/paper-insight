import { reactive, computed } from 'vue'
import type { Paper, FilterState } from '../types'
import { usePapersStore } from '../stores/papers'

export function usePaperFilter() {
  const store = usePapersStore()

  const filter = reactive<FilterState>({
    category: '',
    subcategory: '',
    venue: '',
    search: ''
  })

  const sortedCategories = computed(() =>
    Object.keys(store.categories).sort((a, b) => store.categories[b] - store.categories[a])
  )

  const sortedSubcategories = computed(() =>
    Object.keys(store.subcategories).sort((a, b) => store.subcategories[b] - store.subcategories[a])
  )

  const filtered = computed<Paper[]>(() => {
    let result = store.papers
    if (filter.category) result = result.filter(p => p.category === filter.category)
    if (filter.subcategory) result = result.filter(p => p.subcategory === filter.subcategory)
    if (filter.venue) {
      if (filter.venue === '主会') {
        result = result.filter(p =>
          p.venue?.startsWith('主会') || ['Oral', 'Spotlight', 'Poster'].includes(p.venue)
        )
      } else {
        result = result.filter(p => p.venue === filter.venue)
      }
    }
    if (filter.search) {
      const q = filter.search.toLowerCase()
      result = result.filter(p =>
        (p.title || '').toLowerCase().includes(q) ||
        (p.abstract_en || '').toLowerCase().includes(q) ||
        (p.abstract_zh || '').toLowerCase().includes(q)
      )
    }
    return result
  })

  function resetFilter() {
    filter.category = ''
    filter.subcategory = ''
    filter.venue = ''
    filter.search = ''
  }

  return { filter, sortedCategories, sortedSubcategories, filtered, resetFilter }
}
