import { ref, onMounted, onUnmounted } from 'vue'

const isDark = ref(true)

function syncTheme() {
  const theme = document.documentElement.getAttribute('data-theme')
  isDark.value = theme !== 'light'
}

export function useTheme() {
  onMounted(() => {
    syncTheme()
    const observer = new MutationObserver(syncTheme)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    onUnmounted(() => observer.disconnect())
  })

  return { isDark }
}

export function getChartColors() {
  const dark = document.documentElement.getAttribute('data-theme') !== 'light'
  return {
    axisLine: dark ? '#404040' : '#d4d4d4',
    splitLine: dark ? '#333' : '#e5e5e5',
    label: dark ? '#888' : '#737373',
    labelBright: dark ? '#bbb' : '#404040',
    tooltipBg: dark ? 'rgba(28,28,28,0.95)' : 'rgba(255,255,255,0.95)',
    tooltipBorder: dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
    tooltipText: dark ? '#e5e5e5' : '#1a1a1a',
  }
}
