<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { usePapersStore } from '../stores/papers'
import { fetchSchedules } from '../api'
import type { ScheduleEntry } from '../api'

const store = usePapersStore()

const schedules = ref<ScheduleEntry[]>([])
const schedulesLoaded = ref(false)

onMounted(async () => {
  schedules.value = await fetchSchedules()
  schedulesLoaded.value = true
})

const confColors: Record<string, string> = {
  ACL: '#22c55e',
  EMNLP: '#a855f7',
  ICML: '#3b82f6',
  ICLR: '#06b6d4',
  NeurIPS: '#eab308',
}

// Live clock - updates every second for real-time countdown
const now = ref(new Date())
let timer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  timer = setInterval(() => { now.value = new Date() }, 1000)
})
onUnmounted(() => {
  if (timer) clearInterval(timer)
})

// Countdown breakdown for a target date
function countdown(dateStr: string): { days: number; hours: number; minutes: number; seconds: number; total: number } {
  const diff = new Date(dateStr).getTime() - now.value.getTime()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 }
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
    total: diff,
  }
}

// Pad number to 2 digits
function pad(n: number): string {
  return String(n).padStart(2, '0')
}

// Paper count for a conference
function paperCount(conf: string, year: number): number {
  const confData = store.conferences.find(c => c.id === conf)
  if (!confData) return 0
  const entry = confData.entries.find(e => e.year === year)
  return entry?.paperCount || 0
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  return `${d.getMonth() + 1}月${d.getDate()}日`
}

function formatDateFull(dateStr: string): string {
  const d = new Date(dateStr)
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
}

function getStatusLabel(dates: ScheduleEntry['dates']): string {
  const n = now.value
  const lastDate = new Date(dates[dates.length - 1].date)
  if (n > lastDate) return '已结束'
  const firstDate = new Date(dates[0].date)
  if (n < firstDate) return '征稿中'
  return '进行中'
}

function getStatusClass(dates: ScheduleEntry['dates']): string {
  const label = getStatusLabel(dates)
  if (label === '征稿中') return 'status-open'
  if (label === '进行中') return 'status-ongoing'
  return 'status-ended'
}

function getTimelineStatus(dateStr: string): 'past' | 'upcoming' {
  return new Date(dateStr) < now.value ? 'past' : 'upcoming'
}

// Progress percentage through the timeline (0-100)
function timelineProgress(dates: ScheduleEntry['dates']): number {
  const n = now.value.getTime()
  const start = new Date(dates[0].date).getTime()
  const end = new Date(dates[dates.length - 1].date).getTime()
  if (n <= start) return 0
  if (n >= end) return 100
  return Math.round(((n - start) / (end - start)) * 100)
}

function daysUntil(dateStr: string): number {
  const n = new Date(now.value)
  n.setHours(0, 0, 0, 0)
  const target = new Date(dateStr)
  target.setHours(0, 0, 0, 0)
  return Math.ceil((target.getTime() - n.getTime()) / 86400000)
}

function nextDeadline(dates: ScheduleEntry['dates']): { label: string; date: string; days: number } | null {
  const n = now.value
  for (const d of dates) {
    if (new Date(d.date) >= n) {
      return { label: d.label, date: d.date, days: daysUntil(d.date) }
    }
  }
  return null
}

// Filter state
const selectedConf = ref<string | null>(null)
const selectedYear = ref<number | null>(null)
const expandedConfs = ref<Set<string>>(new Set())

// All available years
const availableYears = computed(() => {
  const years = new Set(schedules.value.map(s => s.year))
  return Array.from(years).sort((a, b) => b - a)
})

// Grouped by conf, sorted by year desc. Each group: { latest, older[] }
interface ConfGroup {
  conf: string
  latest: ScheduleEntry
  older: ScheduleEntry[]
}
const displayGroups = computed((): ConfGroup[] => {
  const filtered = schedules.value.filter(s => {
    if (selectedConf.value && s.conf !== selectedConf.value) return false
    if (selectedYear.value && s.year !== selectedYear.value) return false
    return true
  })
  const groups: Record<string, ScheduleEntry[]> = {}
  for (const s of filtered) {
    if (!groups[s.conf]) groups[s.conf] = []
    groups[s.conf].push(s)
  }
  return Object.entries(groups)
    .map(([conf, entries]) => {
      entries.sort((a, b) => b.year - a.year)
      return { conf, latest: entries[0], older: entries.slice(1) }
    })
    .sort((a, b) => a.latest.year - b.latest.year || a.conf.localeCompare(b.conf))
})

// All upcoming deadlines sorted by date
const allUpcomingDeadlines = computed(() => {
  const n = now.value
  const result: { conf: string; year: number; label: string; date: string; color: string }[] = []
  for (const s of schedules.value) {
    for (const d of s.dates) {
      if (new Date(d.date) >= n) {
        result.push({ conf: s.conf, year: s.year, label: d.label, date: d.date, color: s.color })
      }
    }
  }
  result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  return result
})

// Nearest upcoming deadline (hero countdown)
const heroDeadline = computed(() => allUpcomingDeadlines.value[0] || null)

function toggleExpand(conf: string) {
  if (expandedConfs.value.has(conf)) {
    expandedConfs.value.delete(conf)
  } else {
    expandedConfs.value.add(conf)
  }
}
</script>

<template>
  <div class="main">
    <!-- Loading State -->
    <div v-if="!schedulesLoaded" class="card" style="text-align:center;padding:60px 20px">
      <div class="loading">正在加载会议日程</div>
    </div>

    <template v-else>
    <!-- Hero Countdown -->
    <div v-if="heroDeadline" class="hero-countdown" :style="{ '--hero-color': heroDeadline.color }">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <div class="hero-badge" :style="{ background: heroDeadline.color + '20', color: heroDeadline.color, borderColor: heroDeadline.color + '40' }">
          <span class="hero-badge-dot" :style="{ background: heroDeadline.color }"></span>
          {{ heroDeadline.conf }} {{ heroDeadline.year }}
        </div>
        <div class="hero-label">{{ heroDeadline.label }}</div>
        <div class="hero-date">{{ formatDateFull(heroDeadline.date) }}</div>
        <div class="hero-timer">
          <div class="timer-block">
            <span class="timer-num">{{ pad(countdown(heroDeadline.date).days) }}</span>
            <span class="timer-unit">天</span>
          </div>
          <span class="timer-sep">:</span>
          <div class="timer-block">
            <span class="timer-num">{{ pad(countdown(heroDeadline.date).hours) }}</span>
            <span class="timer-unit">时</span>
          </div>
          <span class="timer-sep">:</span>
          <div class="timer-block">
            <span class="timer-num">{{ pad(countdown(heroDeadline.date).minutes) }}</span>
            <span class="timer-unit">分</span>
          </div>
          <span class="timer-sep">:</span>
          <div class="timer-block">
            <span class="timer-num">{{ pad(countdown(heroDeadline.date).seconds) }}</span>
            <span class="timer-unit">秒</span>
          </div>
        </div>
        <div class="hero-hint">距离下一个截稿节点</div>
      </div>
    </div>

    <!-- Upcoming deadlines list -->
    <div v-if="allUpcomingDeadlines.length > 1" class="card">
      <div class="section-header">
        <div class="card-title">即将到来</div>
        <span style="color:var(--text-muted);font-size:12px">按时间排序</span>
      </div>
      <div class="deadline-list">
        <div v-for="(d, i) in allUpcomingDeadlines.slice(0, 8)" :key="d.conf + d.year + d.label" class="deadline-item" :class="{ 'deadline-first': i === 0 }">
          <span class="deadline-dot" :style="{ background: d.color }"></span>
          <span class="deadline-conf">{{ d.conf }} {{ d.year }}</span>
          <span class="deadline-label">{{ d.label }}</span>
          <span class="deadline-date">{{ formatDate(d.date) }}</span>
          <span class="deadline-countdown" :class="{ urgent: daysUntil(d.date) <= 7 }" :style="daysUntil(d.date) > 7 ? { color: d.color } : {}">
            {{ countdown(d.date).days }}天{{ pad(countdown(d.date).hours) }}:{{ pad(countdown(d.date).minutes) }}:{{ pad(countdown(d.date).seconds) }}
          </span>
        </div>
      </div>
    </div>

    <!-- Conference + Year filter -->
    <div class="filter-section">
      <div class="filter-row">
        <span class="filter-label">会议</span>
        <button class="conf-filter-btn" :class="{ active: !selectedConf }" @click="selectedConf = null">全部</button>
        <button v-for="conf in Object.keys(confColors)" :key="conf" class="conf-filter-btn" :class="{ active: selectedConf === conf }" @click="selectedConf = conf">
          <span class="conf-filter-dot" :style="{ background: confColors[conf] }"></span>
          {{ conf }}
        </button>
      </div>
      <div class="filter-row">
        <span class="filter-label">年份</span>
        <button class="conf-filter-btn" :class="{ active: !selectedYear }" @click="selectedYear = null">全部</button>
        <button v-for="y in availableYears" :key="y" class="conf-filter-btn" :class="{ active: selectedYear === y }" @click="selectedYear = y">{{ y }}</button>
      </div>
    </div>

    <!-- Conference schedule groups -->
    <div v-for="group in displayGroups" :key="group.conf" class="conf-group-section">
      <!-- Latest year: full card -->
      <div class="card schedule-card" :style="{ '--card-color': group.latest.color, borderTopColor: group.latest.color }">
        <div class="schedule-header">
          <div class="schedule-conf-badge" :style="{ background: group.latest.color + '18', color: group.latest.color, borderColor: group.latest.color + '30' }">
            {{ group.latest.conf }}
          </div>
          <div class="schedule-year">{{ group.latest.year }}</div>
          <span class="schedule-status" :class="getStatusClass(group.latest.dates)">{{ getStatusLabel(group.latest.dates) }}</span>
          <button v-if="group.older.length > 0" class="expand-btn" @click="toggleExpand(group.conf)">
            {{ expandedConfs.has(group.conf) ? '收起' : `${group.older.length} 个历史年份` }}
            <svg :class="{ rotated: expandedConfs.has(group.conf) }" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
        </div>

        <div class="schedule-full-name">{{ group.latest.fullName }}</div>

        <div class="schedule-meta">
          <span v-if="group.latest.location" class="schedule-location">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            {{ group.latest.location }}
          </span>
          <span v-if="paperCount(group.latest.conf, group.latest.year) > 0" class="schedule-papers">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            {{ paperCount(group.latest.conf, group.latest.year) }} 篇论文
          </span>
        </div>

        <!-- Progress bar -->
        <div class="timeline-progress">
          <div class="timeline-progress-bar" :style="{ width: timelineProgress(group.latest.dates) + '%', background: `linear-gradient(90deg, ${group.latest.color}80, ${group.latest.color})` }"></div>
        </div>

        <!-- Next deadline countdown card -->
        <div v-if="nextDeadline(group.latest.dates)" class="next-deadline" :style="{ borderColor: group.latest.color + '30', background: group.latest.color + '06' }">
          <div class="next-deadline-left">
            <span class="next-deadline-label">下一个节点</span>
            <span class="next-deadline-name">{{ nextDeadline(group.latest.dates)!.label }}</span>
            <span class="next-deadline-date">{{ formatDate(nextDeadline(group.latest.dates)!.date) }}</span>
          </div>
          <div class="next-deadline-timer" :style="{ color: group.latest.color }">
            <div class="mini-timer">
              <span class="mini-timer-num">{{ countdown(nextDeadline(group.latest.dates)!.date).days }}</span>
              <span class="mini-timer-unit">天</span>
            </div>
            <div class="mini-timer">
              <span class="mini-timer-num">{{ pad(countdown(nextDeadline(group.latest.dates)!.date).hours) }}</span>
              <span class="mini-timer-unit">时</span>
            </div>
            <div class="mini-timer">
              <span class="mini-timer-num">{{ pad(countdown(nextDeadline(group.latest.dates)!.date).minutes) }}</span>
              <span class="mini-timer-unit">分</span>
            </div>
            <div class="mini-timer">
              <span class="mini-timer-num">{{ pad(countdown(nextDeadline(group.latest.dates)!.date).seconds) }}</span>
              <span class="mini-timer-unit">秒</span>
            </div>
          </div>
        </div>

        <!-- Timeline -->
        <div class="schedule-timeline">
          <div v-for="(d, i) in group.latest.dates" :key="i" class="timeline-item" :class="getTimelineStatus(d.date)">
            <div class="timeline-dot" :style="getTimelineStatus(d.date) === 'upcoming' ? { borderColor: group.latest.color, background: group.latest.color + '20', boxShadow: `0 0 8px ${group.latest.color}40` } : {}"></div>
            <div v-if="i < group.latest.dates.length - 1" class="timeline-line" :style="getTimelineStatus(d.date) === 'past' ? {} : { background: group.latest.color + '30' }"></div>
            <div class="timeline-content">
              <span class="timeline-label">{{ d.label }}</span>
              <span class="timeline-date">
                {{ formatDate(d.date) }}
                <template v-if="getTimelineStatus(d.date) === 'upcoming'">
                  <span class="timeline-days" :style="{ color: group.latest.color }">·{{ daysUntil(d.date) }}天后</span>
                </template>
              </span>
            </div>
          </div>
        </div>

        <a :href="group.latest.website" target="_blank" class="schedule-link" :style="{ color: group.latest.color, background: group.latest.color + '12', borderColor: group.latest.color + '25' }">
          访问官网
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        </a>
      </div>

      <!-- Older years: collapsible compact cards -->
      <template v-if="expandedConfs.has(group.conf)">
        <div v-for="entry in group.older" :key="entry.conf + entry.year" class="card schedule-card schedule-card-old" :style="{ '--card-color': entry.color, borderTopColor: entry.color + '60' }">
          <div class="schedule-header">
            <div class="schedule-conf-badge" :style="{ background: entry.color + '12', color: entry.color + 'aa', borderColor: entry.color + '20' }">
              {{ entry.conf }}
            </div>
            <div class="schedule-year" style="font-size:16px">{{ entry.year }}</div>
            <span class="schedule-status" :class="getStatusClass(entry.dates)">{{ getStatusLabel(entry.dates) }}</span>
          </div>
          <div class="schedule-meta" style="margin-bottom:8px">
            <span v-if="entry.location" class="schedule-location">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              {{ entry.location }}
            </span>
            <span v-if="paperCount(entry.conf, entry.year) > 0" class="schedule-papers">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              {{ paperCount(entry.conf, entry.year) }} 篇论文
            </span>
          </div>
          <!-- Compact timeline: only key dates -->
          <div class="schedule-timeline-compact">
            <span v-for="(d, i) in entry.dates" :key="i" class="compact-date" :class="getTimelineStatus(d.date)">
              <span class="compact-dot" :style="getTimelineStatus(d.date) === 'upcoming' ? { background: entry.color } : {}"></span>
              {{ d.label }} {{ formatDate(d.date) }}
            </span>
          </div>
          <a :href="entry.website" target="_blank" class="schedule-link" :style="{ color: entry.color, background: entry.color + '0a', borderColor: entry.color + '15', fontSize: '11px', padding: '4px 10px' }">
            访问官网
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>
      </template>
    </div>

    <!-- Quick links -->
    <div class="card">
      <div class="section-header">
        <div class="card-title">快速导航</div>
      </div>
      <div class="home-cards">
        <router-link to="/overview" class="home-card">
          <div class="home-card-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
            </svg>
          </div>
          <div class="home-card-title">数据总览</div>
          <div class="home-card-desc">论文统计、细分方向概览</div>
        </router-link>
        <router-link to="/papers" class="home-card">
          <div class="home-card-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
            </svg>
          </div>
          <div class="home-card-title">论文浏览</div>
          <div class="home-card-desc">按细分方向、会议类别筛选</div>
        </router-link>
        <router-link to="/wordcloud" class="home-card">
          <div class="home-card-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 14.899A7 7 0 1115.71 8h1.79a4.5 4.5 0 012.5 8.242"/><path d="M12 12v9"/><path d="m8 17 4 4 4-4"/>
            </svg>
          </div>
          <div class="home-card-title">词云分析</div>
          <div class="home-card-desc">名词性关键词词云</div>
        </router-link>
      </div>
    </div>
    </template>
  </div>
</template>
