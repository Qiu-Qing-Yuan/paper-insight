<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { usePapersStore } from '../stores/papers'

const store = usePapersStore()

interface ScheduleEntry {
  conf: string
  fullName: string
  year: number
  color: string
  website: string
  dates: { label: string; date: string }[]
  location: string
}

const schedules: ScheduleEntry[] = [
  {
    conf: 'ACL', fullName: 'Annual Meeting of the Association for Computational Linguistics', year: 2026,
    color: '#22c55e', website: 'https://2026.aclweb.org/',
    location: 'San Diego, USA',
    dates: [
      { label: 'ARR 截稿', date: '2026-01-05' },
      { label: 'Commitment 截止', date: '2026-03-14' },
      { label: '录用通知', date: '2026-04-04' },
      { label: 'Camera-Ready', date: '2026-04-19' },
      { label: '会议日期', date: '2026-07-02' },
    ]
  },
  {
    conf: 'ACL', fullName: 'Annual Meeting of the Association for Computational Linguistics', year: 2025,
    color: '#22c55e', website: 'https://2025.aclweb.org/',
    location: 'Vienna, Austria',
    dates: [
      { label: 'ARR 截稿', date: '2025-02-15' },
      { label: 'Commitment 截止', date: '2025-04-20' },
      { label: '录用通知', date: '2025-05-15' },
      { label: 'Camera-Ready', date: '2025-05-30' },
      { label: '会议日期', date: '2025-07-27' },
    ]
  },
  {
    conf: 'EMNLP', fullName: 'Conference on Empirical Methods in Natural Language Processing', year: 2026,
    color: '#a855f7', website: 'https://2026.emnlp.org/',
    location: '待定',
    dates: [
      { label: 'ARR 截稿', date: '2026-05-19' },
      { label: 'Commitment 截止', date: '2026-08-01' },
      { label: '录用通知', date: '2026-08-20' },
      { label: 'Camera-Ready', date: '2026-09-19' },
      { label: '会议日期', date: '2026-11-04' },
    ]
  },
  {
    conf: 'EMNLP', fullName: 'Conference on Empirical Methods in Natural Language Processing', year: 2025,
    color: '#a855f7', website: 'https://2025.emnlp.org/',
    location: 'Suzhou, China',
    dates: [
      { label: 'ARR 截稿', date: '2025-05-19' },
      { label: 'Commitment 截止', date: '2025-08-01' },
      { label: '录用通知', date: '2025-08-20' },
      { label: 'Camera-Ready', date: '2025-09-19' },
      { label: '会议日期', date: '2025-11-04' },
    ]
  },
  {
    conf: 'ICML', fullName: 'International Conference on Machine Learning', year: 2026,
    color: '#3b82f6', website: 'https://icml.cc/Conferences/2026',
    location: '待定',
    dates: [
      { label: '全文截稿', date: '2026-01-31' },
      { label: '录用通知', date: '2026-05-01' },
      { label: '会议日期', date: '2026-07-13' },
    ]
  },
  {
    conf: 'ICML', fullName: 'International Conference on Machine Learning', year: 2025,
    color: '#3b82f6', website: 'https://icml.cc/Conferences/2025',
    location: 'Vancouver, Canada',
    dates: [
      { label: '全文截稿', date: '2025-01-31' },
      { label: '录用通知', date: '2025-05-01' },
      { label: '会议日期', date: '2025-07-13' },
    ]
  },
  {
    conf: 'ICLR', fullName: 'International Conference on Learning Representations', year: 2026,
    color: '#06b6d4', website: 'https://iclr.cc/Conferences/2026',
    location: 'Rio de Janeiro, Brazil',
    dates: [
      { label: '摘要截稿', date: '2025-09-20' },
      { label: '全文截稿', date: '2025-09-25' },
      { label: '录用通知', date: '2026-03-17' },
      { label: '会议日期', date: '2026-04-23' },
    ]
  },
  {
    conf: 'ICLR', fullName: 'International Conference on Learning Representations', year: 2025,
    color: '#06b6d4', website: 'https://iclr.cc/Conferences/2025',
    location: 'Singapore',
    dates: [
      { label: '摘要截稿', date: '2024-09-14' },
      { label: '全文截稿', date: '2024-09-28' },
      { label: '录用通知', date: '2025-01-22' },
      { label: '会议日期', date: '2025-04-24' },
    ]
  },
  {
    conf: 'NeurIPS', fullName: 'Conference on Neural Information Processing Systems', year: 2025,
    color: '#eab308', website: 'https://neurips.cc/Conferences/2025',
    location: 'San Diego, USA',
    dates: [
      { label: 'Abstract 截稿', date: '2025-05-11' },
      { label: '全文截稿', date: '2025-05-16' },
      { label: '录用通知', date: '2025-09-18' },
      { label: '会议日期', date: '2025-12-01' },
    ]
  },
  {
    conf: 'NeurIPS', fullName: 'Conference on Neural Information Processing Systems', year: 2026,
    color: '#eab308', website: 'https://neurips.cc/Conferences/2026',
    location: '待定',
    dates: [
      { label: 'Abstract 截稿', date: '2026-05-04' },
      { label: '全文截稿', date: '2026-05-06' },
      { label: '录用通知', date: '2026-09-18' },
      { label: '会议日期', date: '2026-12-06' },
    ]
  },
]

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

// Group schedules by conference
const groupedSchedules = computed(() => {
  const groups: Record<string, ScheduleEntry[]> = {}
  for (const s of schedules) {
    if (!groups[s.conf]) groups[s.conf] = []
    groups[s.conf].push(s)
  }
  for (const conf of Object.keys(groups)) {
    groups[conf].sort((a, b) => b.year - a.year)
  }
  return groups
})

// All upcoming deadlines sorted by date
const allUpcomingDeadlines = computed(() => {
  const n = now.value
  const result: { conf: string; year: number; label: string; date: string; color: string }[] = []
  for (const s of schedules) {
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

const selectedConf = ref<string | null>(null)
const filteredSchedules = computed(() => {
  if (!selectedConf.value) return schedules
  return schedules.filter(s => s.conf === selectedConf.value)
})
</script>

<template>
  <div class="main">
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
            {{ countdown(d.date).days }}天{{ pad(countdown(d.date).hours) }}:{{ pad(countdown(d.date).minutes) }}
          </span>
        </div>
      </div>
    </div>

    <!-- Conference filter -->
    <div class="conf-filter-bar">
      <button class="conf-filter-btn" :class="{ active: !selectedConf }" @click="selectedConf = null">全部</button>
      <button v-for="conf in Object.keys(groupedSchedules)" :key="conf" class="conf-filter-btn" :class="{ active: selectedConf === conf }" @click="selectedConf = conf">
        <span class="conf-filter-dot" :style="{ background: confColors[conf] }"></span>
        {{ conf }}
      </button>
    </div>

    <!-- Conference schedule cards -->
    <div class="schedule-grid">
      <div v-for="entry in filteredSchedules" :key="entry.conf + entry.year" class="card schedule-card" :style="{ '--card-color': entry.color, borderTopColor: entry.color }">
        <div class="schedule-header">
          <div class="schedule-conf-badge" :style="{ background: entry.color + '18', color: entry.color, borderColor: entry.color + '30' }">
            {{ entry.conf }}
          </div>
          <div class="schedule-year">{{ entry.year }}</div>
          <span class="schedule-status" :class="getStatusClass(entry.dates)">{{ getStatusLabel(entry.dates) }}</span>
        </div>

        <div class="schedule-full-name">{{ entry.fullName }}</div>

        <div class="schedule-meta">
          <span v-if="entry.location" class="schedule-location">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            {{ entry.location }}
          </span>
          <span v-if="paperCount(entry.conf, entry.year) > 0" class="schedule-papers">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            {{ paperCount(entry.conf, entry.year) }} 篇论文
          </span>
        </div>

        <!-- Progress bar -->
        <div class="timeline-progress">
          <div class="timeline-progress-bar" :style="{ width: timelineProgress(entry.dates) + '%', background: `linear-gradient(90deg, ${entry.color}80, ${entry.color})` }"></div>
        </div>

        <!-- Next deadline countdown card -->
        <div v-if="nextDeadline(entry.dates)" class="next-deadline" :style="{ borderColor: entry.color + '30', background: entry.color + '06' }">
          <div class="next-deadline-left">
            <span class="next-deadline-label">下一个节点</span>
            <span class="next-deadline-name">{{ nextDeadline(entry.dates)!.label }}</span>
            <span class="next-deadline-date">{{ formatDate(nextDeadline(entry.dates)!.date) }}</span>
          </div>
          <div class="next-deadline-timer" :style="{ color: entry.color }">
            <div class="mini-timer">
              <span class="mini-timer-num">{{ countdown(nextDeadline(entry.dates)!.date).days }}</span>
              <span class="mini-timer-unit">天</span>
            </div>
            <div class="mini-timer">
              <span class="mini-timer-num">{{ pad(countdown(nextDeadline(entry.dates)!.date).hours) }}</span>
              <span class="mini-timer-unit">时</span>
            </div>
            <div class="mini-timer">
              <span class="mini-timer-num">{{ pad(countdown(nextDeadline(entry.dates)!.date).minutes) }}</span>
              <span class="mini-timer-unit">分</span>
            </div>
          </div>
        </div>

        <!-- Timeline -->
        <div class="schedule-timeline">
          <div v-for="(d, i) in entry.dates" :key="i" class="timeline-item" :class="getTimelineStatus(d.date)">
            <div class="timeline-dot" :style="getTimelineStatus(d.date) === 'upcoming' ? { borderColor: entry.color, background: entry.color + '20', boxShadow: `0 0 8px ${entry.color}40` } : {}"></div>
            <div v-if="i < entry.dates.length - 1" class="timeline-line" :style="getTimelineStatus(d.date) === 'past' ? {} : { background: entry.color + '30' }"></div>
            <div class="timeline-content">
              <span class="timeline-label">{{ d.label }}</span>
              <span class="timeline-date">
                {{ formatDate(d.date) }}
                <template v-if="getTimelineStatus(d.date) === 'upcoming'">
                  <span class="timeline-days" :style="{ color: entry.color }">·{{ daysUntil(d.date) }}天后</span>
                </template>
              </span>
            </div>
          </div>
        </div>

        <a :href="entry.website" target="_blank" class="schedule-link" :style="{ color: entry.color, background: entry.color + '12', borderColor: entry.color + '25' }">
          访问官网
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        </a>
      </div>
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
  </div>
</template>
