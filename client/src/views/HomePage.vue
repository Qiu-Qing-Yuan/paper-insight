<script setup lang="ts">
import { computed, ref } from 'vue'
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
    location: '待定',
    dates: [
      { label: 'Abstract 截稿', date: '2026-01-15' },
      { label: '全文截稿', date: '2026-01-22' },
      { label: '录用通知', date: '2026-05-01' },
      { label: '会议日期', date: '2026-07-27' },
    ]
  },
  {
    conf: 'ACL', fullName: 'Annual Meeting of the Association for Computational Linguistics', year: 2025,
    color: '#22c55e', website: 'https://2025.aclweb.org/',
    location: 'Vienna, Austria',
    dates: [
      { label: 'Abstract 截稿', date: '2025-01-15' },
      { label: '全文截稿', date: '2025-01-22' },
      { label: '录用通知', date: '2025-05-01' },
      { label: '会议日期', date: '2025-07-27' },
    ]
  },
  {
    conf: 'EMNLP', fullName: 'Conference on Empirical Methods in Natural Language Processing', year: 2026,
    color: '#a855f7', website: 'https://2026.emnlp.org/',
    location: '待定',
    dates: [
      { label: 'Abstract 截稿', date: '2026-06-15' },
      { label: '全文截稿', date: '2026-06-22' },
      { label: '录用通知', date: '2026-09-20' },
      { label: '会议日期', date: '2026-11-08' },
    ]
  },
  {
    conf: 'EMNLP', fullName: 'Conference on Empirical Methods in Natural Language Processing', year: 2025,
    color: '#a855f7', website: 'https://2025.emnlp.org/',
    location: 'Suzhou, China',
    dates: [
      { label: 'Abstract 截稿', date: '2025-06-15' },
      { label: '全文截稿', date: '2025-06-22' },
      { label: '录用通知', date: '2025-09-20' },
      { label: '会议日期', date: '2025-11-08' },
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
    location: 'Singapore',
    dates: [
      { label: '全文截稿', date: '2025-10-01' },
      { label: '录用通知', date: '2026-01-22' },
      { label: '会议日期', date: '2026-04-28' },
    ]
  },
  {
    conf: 'ICLR', fullName: 'International Conference on Learning Representations', year: 2025,
    color: '#06b6d4', website: 'https://iclr.cc/Conferences/2025',
    location: 'Singapore',
    dates: [
      { label: '全文截稿', date: '2024-10-01' },
      { label: '录用通知', date: '2025-01-22' },
      { label: '会议日期', date: '2025-04-28' },
    ]
  },
  {
    conf: 'NeurIPS', fullName: 'Conference on Neural Information Processing Systems', year: 2025,
    color: '#eab308', website: 'https://neurips.cc/Conferences/2025',
    location: 'San Diego, USA',
    dates: [
      { label: 'Abstract 截稿', date: '2025-05-15' },
      { label: '全文截稿', date: '2025-05-22' },
      { label: '录用通知', date: '2025-09-25' },
      { label: '会议日期', date: '2025-12-08' },
    ]
  },
  {
    conf: 'NeurIPS', fullName: 'Conference on Neural Information Processing Systems', year: 2026,
    color: '#eab308', website: 'https://neurips.cc/Conferences/2026',
    location: '待定',
    dates: [
      { label: 'Abstract 截稿', date: '2026-05-15' },
      { label: '全文截稿', date: '2026-05-22' },
      { label: '录用通知', date: '2026-09-25' },
      { label: '会议日期', date: '2026-12-07' },
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

// Group schedules by conference
const groupedSchedules = computed(() => {
  const groups: Record<string, ScheduleEntry[]> = {}
  for (const s of schedules) {
    if (!groups[s.conf]) groups[s.conf] = []
    groups[s.conf].push(s)
  }
  // Sort each group by year descending
  for (const conf of Object.keys(groups)) {
    groups[conf].sort((a, b) => b.year - a.year)
  }
  return groups
})

// Upcoming deadlines (next 90 days)
const upcomingDeadlines = computed(() => {
  const now = new Date()
  const result: { conf: string; year: number; label: string; date: string; daysLeft: number; color: string }[] = []
  for (const s of schedules) {
    for (const d of s.dates) {
      const target = new Date(d.date)
      const diff = Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
      if (diff > 0 && diff <= 90) {
        result.push({ conf: s.conf, year: s.year, label: d.label, date: d.date, daysLeft: diff, color: s.color })
      }
    }
  }
  result.sort((a, b) => a.daysLeft - b.daysLeft)
  return result
})

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

function getStatusLabel(dates: ScheduleEntry['dates']): string {
  const now = new Date()
  const lastDate = new Date(dates[dates.length - 1].date)
  if (now > lastDate) return '已结束'
  const firstDate = new Date(dates[0].date)
  if (now < firstDate) return '征稿中'
  return '进行中'
}

function getStatusClass(dates: ScheduleEntry['dates']): string {
  const label = getStatusLabel(dates)
  if (label === '征稿中') return 'status-open'
  if (label === '进行中') return 'status-ongoing'
  return 'status-ended'
}

function getTimelineStatus(dateStr: string): 'past' | 'upcoming' {
  return new Date(dateStr) < new Date() ? 'past' : 'upcoming'
}

function daysUntil(dateStr: string): number {
  const now = new Date()
  now.setHours(0, 0, 0, 0)
  const target = new Date(dateStr)
  target.setHours(0, 0, 0, 0)
  return Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
}

function nextDeadline(dates: ScheduleEntry['dates']): { label: string; date: string; days: number } | null {
  const now = new Date()
  for (const d of dates) {
    if (new Date(d.date) >= now) {
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
    <!-- Upcoming deadlines banner -->
    <div v-if="upcomingDeadlines.length > 0" class="card deadline-banner" style="border-left: 3px solid var(--accent)">
      <div class="section-header">
        <div class="card-title">近期截稿提醒</div>
        <span style="color:var(--text-muted);font-size:13px">未来 90 天内</span>
      </div>
      <div class="deadline-list">
        <div v-for="d in upcomingDeadlines" :key="d.conf + d.year + d.label" class="deadline-item">
          <span class="deadline-dot" :style="{ background: d.color }"></span>
          <span class="deadline-conf">{{ d.conf }} {{ d.year }}</span>
          <span class="deadline-label">{{ d.label }}</span>
          <span class="deadline-date">{{ formatDate(d.date) }}</span>
          <span class="deadline-countdown" :class="{ urgent: d.daysLeft <= 14 }">
            {{ d.daysLeft <= 0 ? '今天' : d.daysLeft + ' 天后' }}
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
      <div v-for="entry in filteredSchedules" :key="entry.conf + entry.year" class="card schedule-card" :style="{ borderTopColor: entry.color }">
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

        <!-- Next deadline highlight -->
        <div v-if="nextDeadline(entry.dates)" class="next-deadline" :style="{ borderColor: entry.color + '40', background: entry.color + '08' }">
          <span class="next-deadline-label">下一个节点</span>
          <span class="next-deadline-name">{{ nextDeadline(entry.dates)!.label }}</span>
          <span class="next-deadline-date">{{ formatDate(nextDeadline(entry.dates)!.date) }}</span>
          <span class="next-deadline-days" :class="{ urgent: nextDeadline(entry.dates)!.days <= 14 }" :style="nextDeadline(entry.dates)!.days > 14 ? { color: entry.color } : {}">
            {{ nextDeadline(entry.dates)!.days <= 0 ? '今天' : nextDeadline(entry.dates)!.days + ' 天后' }}
          </span>
        </div>

        <div class="schedule-timeline">
          <div v-for="(d, i) in entry.dates" :key="i" class="timeline-item" :class="getTimelineStatus(d.date)">
            <div class="timeline-dot" :style="getTimelineStatus(d.date) === 'upcoming' ? { borderColor: entry.color, background: entry.color + '20' } : {}"></div>
            <div v-if="i < entry.dates.length - 1" class="timeline-line"></div>
            <div class="timeline-content">
              <span class="timeline-label">{{ d.label }}</span>
              <span class="timeline-date">
                {{ formatDate(d.date) }}
                <template v-if="getTimelineStatus(d.date) === 'upcoming'">
                  <span class="timeline-days" :style="{ color: entry.color }">({{ daysUntil(d.date) }}天)</span>
                </template>
              </span>
            </div>
          </div>
        </div>

        <a :href="entry.website" target="_blank" class="schedule-link">
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
