<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { usePapersStore } from '../stores/papers'

const store = usePapersStore()
const conferences = computed(() => store.conferences)
const activeKey = computed(() => store.activeConferenceKey)
const openDropdown = ref<string | null>(null)

const confColors: Record<string, string> = {
  ACL: '#22c55e',
  ICML: '#3b82f6',
  ICLR: '#06b6d4',
  EMNLP: '#a855f7',
  NeurIPS: '#eab308',
}

interface YearEntry {
  key: string
  year: number
  count: number
  status: string
}

interface ConfGroup {
  id: string
  name: string
  color: string
  years: YearEntry[]
}

const groups = computed<ConfGroup[]>(() => {
  const result: ConfGroup[] = []

  result.push({
    id: 'ACL',
    name: 'ACL',
    color: confColors.ACL,
    years: [{
      key: 'ACL',
      year: 2025,
      count: store.aclPapers.length || store.papers.length,
      status: 'ready',
    }],
  })

  for (const conf of conferences.value) {
    result.push({
      id: conf.id,
      name: conf.name,
      color: confColors[conf.id] || '#888',
      years: conf.entries.map(e => ({
        key: e.key,
        year: e.year,
        count: e.paperCount,
        status: e.status,
      })),
    })
  }

  return result
})

function activeYearFor(conf: ConfGroup): YearEntry | undefined {
  return conf.years.find(y => y.key === activeKey.value) || conf.years[0]
}

function toggleDropdown(id: string) {
  openDropdown.value = openDropdown.value === id ? null : id
}

function selectYear(conf: string, year?: number) {
  store.switchConference(conf, year)
  openDropdown.value = null
}

// Close on outside click
function handleOutside(e: MouseEvent) {
  const target = e.target as HTMLElement
  if (!target.closest('.conf-dropdown-wrap')) {
    openDropdown.value = null
  }
}

onMounted(() => document.addEventListener('click', handleOutside))
onUnmounted(() => document.removeEventListener('click', handleOutside))
</script>

<template>
  <div class="conf-bar">
    <div v-for="group in groups" :key="group.id" class="conf-group">
      <span class="conf-group-name">
        <span class="conf-dot" :style="{ background: group.color, boxShadow: '0 0 6px ' + group.color + '80' }"></span>
        {{ group.name }}
      </span>

      <!-- Single year: no dropdown -->
      <span
        v-if="group.years.length === 1"
        class="conf-year-btn"
        :class="{ active: activeKey === group.years[0].key }"
        @click="selectYear(group.id, group.years[0].year)"
      >
        {{ group.years[0].year }}
        <span v-if="group.years[0].count > 0" class="conf-year-count">{{ group.years[0].count }}</span>
      </span>

      <!-- Multiple years: dropdown -->
      <div v-else class="conf-dropdown-wrap" :class="{ open: openDropdown === group.id }">
        <button
          class="conf-year-btn"
          :class="{ active: group.years.some(y => y.key === activeKey) }"
          @click.stop="toggleDropdown(group.id)"
        >
          <span v-if="activeYearFor(group)">{{ activeYearFor(group)!.year }}</span>
          <span v-else>选择年份</span>
          <svg class="conf-chevron" width="10" height="10" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <Transition name="dropdown">
          <div v-if="openDropdown === group.id" class="conf-dropdown-menu">
            <div
              v-for="yt in group.years"
              :key="yt.key"
              class="conf-dropdown-item"
              :class="{ active: activeKey === yt.key, fetching: yt.status === 'fetching' }"
              @click.stop="selectYear(group.id, yt.year)"
            >
              <span class="conf-dropdown-year">{{ yt.year }}</span>
              <span class="conf-dropdown-count">
                <span v-if="yt.status === 'fetching'" class="conf-spinner"></span>
                <template v-else-if="yt.count > 0">{{ yt.count }} 篇</template>
                <template v-else>点击加载</template>
              </span>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>
