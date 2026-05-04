import { ref, computed, type Ref } from 'vue'

export function usePagination<T>(items: Ref<T[]>, pageSize = 20) {
  const page = ref(1)
  const jumpPage = ref('')

  const totalPages = computed(() => Math.ceil(items.value.length / pageSize))

  const pagePapers = computed(() => {
    const start = (page.value - 1) * pageSize
    return items.value.slice(start, start + pageSize)
  })

  const visiblePages = computed(() => {
    const total = totalPages.value
    const current = page.value
    const pages: number[] = []
    let start = Math.max(1, current - 2)
    let end = Math.min(total, start + 4)
    start = Math.max(1, end - 4)
    for (let i = start; i <= end; i++) pages.push(i)
    return pages
  })

  function goToPage(p: number) {
    const n = Number(p)
    if (n >= 1 && n <= totalPages.value) {
      page.value = n
    }
  }

  function goToJumpPage() {
    const n = Number(jumpPage.value)
    if (n >= 1 && n <= totalPages.value) {
      page.value = n
      jumpPage.value = ''
    }
  }

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function resetPage() {
    page.value = 1
  }

  return { page, jumpPage, totalPages, pagePapers, visiblePages, goToPage, goToJumpPage, scrollTop, resetPage }
}
