<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import * as echarts from 'echarts'
import { usePapersStore } from '../stores/papers'
import { usePagination } from '../composables/usePagination'
import { scholarUrl, anthologyUrl } from '../utils'
import { getChartColors } from '../composables/useTheme'

const store = usePapersStore()

const chartSubcategory = ref<HTMLElement | null>(null)
const chartVenue = ref<HTMLElement | null>(null)
const chartMainRatio = ref<HTMLElement | null>(null)
const chartHeatmap = ref<HTMLElement | null>(null)
const selectedLabel = ref('')
const selectedPapers = ref<any[]>([])
const detailPaper = ref<any>(null)
const selSortBy = ref('default')

let subChart: echarts.ECharts | null = null
let venueChart: echarts.ECharts | null = null
let ratioChart: echarts.ECharts | null = null
let heatChart: echarts.ECharts | null = null

const colors = ['#2563eb','#3b82f6','#60a5fa','#93c5fd','#1d4ed8','#1e40af','#0ea5e9','#06b6d4','#14b8a6','#22c55e','#84cc16','#eab308','#f97316','#ef4444','#ec4899','#a855f7','#8b5cf6','#6366f1','#818cf8','#a5b4fc']

const selSortedPapers = computed(() => {
  const arr = [...selectedPapers.value]
  if (selSortBy.value === 'venue') arr.sort((a, b) => (a.venue || '').localeCompare(b.venue || ''))
  else if (selSortBy.value === 'title') arr.sort((a, b) => (a.title || '').localeCompare(b.title || ''))
  return arr
})

const { page: selPage, jumpPage: selJumpPage, totalPages: selTotalPages, pagePapers: selPagePapers, visiblePages: selVisiblePages, goToJumpPage: selGoToPage, scrollTop: scrollSelTop, resetPage: resetSelPage } = usePagination(selSortedPapers, 20)

const topSubs = computed(() => Object.entries(store.subcategories).sort((a, b) => b[1] - a[1]).slice(0, 20))

const topMainRatio = computed(() => {
  return Object.keys(store.subcategories).map(sub => {
    const sp = store.papers.filter(p => p.subcategory === sub)
    const mp = sp.filter(p => p.venue?.startsWith('主会') || ['Oral', 'Spotlight', 'Poster'].includes(p.venue))
    return { name: sub, ratio: sp.length > 0 ? mp.length / sp.length : 0, count: sp.length }
  }).filter(r => r.count >= 15).sort((a, b) => b.ratio - a.ratio).slice(0, 10)
})

function refreshAll() {
  renderSubcategoryChart()
  renderVenueChart()
  renderMainRatioChart()
  renderHeatmapChart()
}

function showSubcategoryPapers(subcategory: string) {
  selectedLabel.value = subcategory
  selectedPapers.value = store.papers.filter(p => p.subcategory === subcategory)
  resetSelPage()
  selSortBy.value = 'default'
}

function showVenuePapers(venue: string) {
  selectedLabel.value = venue
  selectedPapers.value = store.papers.filter(p => (p.venue || '未知') === venue)
  resetSelPage()
  selSortBy.value = 'default'
}

function showSubVenuePapers(subcategory: string, venue: string) {
  selectedLabel.value = subcategory + ' × ' + venue
  selectedPapers.value = store.papers.filter(p => p.subcategory === subcategory && p.venue === venue)
  resetSelPage()
  selSortBy.value = 'default'
}

function showPaperDetail(paper: any) { detailPaper.value = paper }

function renderSubcategoryChart() {
  const el = chartSubcategory.value; if (!el) return
  const data = Object.entries(store.subcategories).sort((a, b) => b[1] - a[1]).slice(0, 20)
  if (!data.length) { el.innerHTML = '<div class="chart-loading">暂无数据</div>'; return }
  const c = getChartColors()
  if (subChart) { subChart.dispose(); subChart = null }
  el.innerHTML = ''
  subChart = echarts.init(el)
  subChart.setOption({
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    grid: { left: '3%', right: '10%', bottom: '3%', top: '3%', containLabel: true },
    xAxis: { type: 'value', axisLabel: { color: c.label, fontSize: 11 }, splitLine: { lineStyle: { color: c.splitLine } }, axisLine: { lineStyle: { color: c.axisLine } } },
    yAxis: { type: 'category', data: data.map(s => s[0]).reverse(), axisLabel: { color: c.labelBright, fontSize: 11 }, axisLine: { lineStyle: { color: c.axisLine } } },
    series: [{ type: 'bar', data: data.map((s, i) => ({ value: s[1], itemStyle: { color: colors[i % colors.length] } })).reverse(), barWidth: '55%', itemStyle: { borderRadius: [0, 4, 4, 0] } }]
  })
  subChart.on('click', (params: any) => { if (params.name) showSubcategoryPapers(params.name) })
}

function renderVenueChart() {
  const el = chartVenue.value; if (!el) return
  const venueData: Record<string, number> = {}
  store.papers.forEach(p => { const v = p.venue || '未知'; venueData[v] = (venueData[v] || 0) + 1 })
  const data = Object.entries(venueData).sort((a, b) => b[1] - a[1]).slice(0, 10)
  if (!data.length) { el.innerHTML = '<div class="chart-loading">暂无数据</div>'; return }
  const c = getChartColors()
  if (venueChart) { venueChart.dispose(); venueChart = null }
  el.innerHTML = ''
  venueChart = echarts.init(el)
  venueChart.setOption({
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    grid: { left: '3%', right: '6%', bottom: '10%', top: '8%', containLabel: true },
    xAxis: { type: 'category', data: data.map(v => v[0]), axisLabel: { color: c.label, fontSize: 10, rotate: 25, interval: 0 }, axisLine: { lineStyle: { color: c.axisLine } } },
    yAxis: { type: 'value', axisLabel: { color: c.label, fontSize: 11 }, splitLine: { lineStyle: { color: c.splitLine } }, axisLine: { lineStyle: { color: c.axisLine } } },
    series: [{ type: 'bar', data: data.map((v, i) => ({ value: v[1], itemStyle: { color: colors[i % colors.length] } })), barWidth: '50%', itemStyle: { borderRadius: [6, 6, 0, 0] } }]
  })
  venueChart.on('click', (params: any) => { if (params.name) showVenuePapers(params.name) })
}

function renderMainRatioChart() {
  const el = chartMainRatio.value; if (!el) return
  const data = topMainRatio.value
  if (!data.length) { el.innerHTML = '<div class="chart-loading">暂无数据</div>'; return }
  if (ratioChart) { ratioChart.dispose(); ratioChart = null }
  el.innerHTML = ''
  const c = getChartColors()
  ratioChart = echarts.init(el)
  ratioChart.setOption({
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' }, formatter: (p: any) => p[0].name + ': ' + (p[0].value * 100).toFixed(1) + '%' },
    grid: { left: '3%', right: '10%', bottom: '3%', top: '3%', containLabel: true },
    xAxis: { type: 'value', max: 1, axisLabel: { color: c.label, fontSize: 11, formatter: (v: number) => (v * 100) + '%' }, splitLine: { lineStyle: { color: c.splitLine } }, axisLine: { lineStyle: { color: c.axisLine } } },
    yAxis: { type: 'category', data: data.map(r => r.name).reverse(), axisLabel: { color: c.labelBright, fontSize: 11 }, axisLine: { lineStyle: { color: c.axisLine } } },
    series: [{ type: 'bar', data: data.map(r => r.ratio).reverse(), barWidth: '55%', itemStyle: { borderRadius: [0, 4, 4, 0], color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{ offset: 0, color: '#2563eb' }, { offset: 1, color: '#0ea5e9' }]) } }]
  })
  ratioChart.on('click', (params: any) => { if (params.name) showSubcategoryPapers(params.name) })
}

function renderHeatmapChart() {
  const el = chartHeatmap.value; if (!el) return
  const venueData: Record<string, number> = {}
  store.papers.forEach(p => { const v = p.venue || '未知'; venueData[v] = (venueData[v] || 0) + 1 })
  const topSubsData = Object.entries(store.subcategories).sort((a, b) => b[1] - a[1]).slice(0, 12).map(s => s[0])
  const topVenues = Object.entries(venueData).sort((a, b) => b[1] - a[1]).slice(0, 6).map(v => v[0])
  const subLabels = topSubsData.map(s => s.length > 7 ? s.substring(0, 7) + '…' : s)
  const venueLabels = topVenues.map(v => v.length > 6 ? v.substring(0, 6) + '…' : v)
  const heatData: [number, number, number][] = []
  topSubsData.forEach((sub, ci) => { topVenues.forEach((venue, vi) => { heatData.push([vi, ci, store.papers.filter(p => p.subcategory === sub && p.venue === venue).length]) }) })
  if (heatChart) { heatChart.dispose(); heatChart = null }
  el.innerHTML = ''
  const c = getChartColors()
  heatChart = echarts.init(el)
  heatChart.setOption({
    tooltip: { formatter: (p: any) => topVenues[p.value[0]] + ' × ' + topSubsData[p.value[1]] + ': ' + p.value[2] + '篇' },
    grid: { left: '18%', right: '14%', bottom: '18%', top: '8%', containLabel: false },
    xAxis: { type: 'category', data: venueLabels, axisLabel: { color: c.label, fontSize: 10, rotate: 30, interval: 0 }, axisLine: { lineStyle: { color: c.axisLine } }, splitLine: { show: true, lineStyle: { color: c.splitLine } } },
    yAxis: { type: 'category', data: subLabels, axisLabel: { color: c.label, fontSize: 10, width: 90, overflow: 'truncate' }, axisLine: { lineStyle: { color: c.axisLine } }, splitLine: { show: true, lineStyle: { color: c.splitLine } } },
    visualMap: { min: 0, max: 150, calculable: true, orient: 'horizontal', left: 'center', bottom: 0, height: 20, textStyle: { color: c.label, fontSize: 10 }, inRange: { color: ['#1e1e1e', '#1e3a5f', '#1e40af', '#2563eb', '#3b82f6', '#60a5fa'] } },
    series: [{ type: 'heatmap', data: heatData, label: { show: true, color: c.labelBright, fontSize: 10, formatter: (p: any) => p.value[2] > 0 ? p.value[2] : '' }, emphasis: { itemStyle: { shadowBlur: 10, shadowColor: 'rgba(0,0,0,0.5)', borderColor: '#fff', borderWidth: 1 } } }]
  })
  heatChart.on('click', (params: any) => {
    if (params.value && params.value.length >= 3) {
      const venueIdx = params.value[0]
      const subIdx = params.value[1]
      if (topVenues[venueIdx] && topSubsData[subIdx]) showSubVenuePapers(topSubsData[subIdx], topVenues[venueIdx])
    }
  })
}

let themeObserver: MutationObserver | null = null

onMounted(() => {
  watch(() => store.papers.length, (len) => {
    if (len > 0) {
      renderSubcategoryChart()
      renderVenueChart()
      renderMainRatioChart()
      renderHeatmapChart()
    }
  }, { immediate: true })
  themeObserver = new MutationObserver(() => {
    if (store.papers.length > 0) {
      renderSubcategoryChart()
      renderVenueChart()
      renderMainRatioChart()
      renderHeatmapChart()
    }
  })
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
})

onUnmounted(() => {
  if (subChart) subChart.dispose()
  if (venueChart) venueChart.dispose()
  if (ratioChart) ratioChart.dispose()
  if (heatChart) heatChart.dispose()
  if (themeObserver) themeObserver.disconnect()
})
</script>

<template>
  <div class="main">
    <div class="card" style="padding:14px 20px">
      <div class="section-header" style="margin-bottom:0">
        <div class="card-title">统计图表</div>
        <button class="btn btn-primary btn-sm" @click="refreshAll()">刷新全部数据</button>
      </div>
    </div>

    <div class="chart-grid">
      <div class="card">
        <div class="section-header"><div class="card-title">细分方向分布 (Top 20)</div><button class="btn btn-secondary btn-sm" @click="renderSubcategoryChart()">刷新</button></div>
        <div ref="chartSubcategory" class="chart-box" style="height:500px"></div>
      </div>
      <div class="card">
        <div class="section-header"><div class="card-title">会议类别分布</div><button class="btn btn-secondary btn-sm" @click="renderVenueChart()">刷新</button></div>
        <div ref="chartVenue" class="chart-box"></div>
      </div>
    </div>

    <div class="chart-grid">
      <div class="card">
        <div class="section-header"><div class="card-title">主会论文占比</div><button class="btn btn-secondary btn-sm" @click="renderMainRatioChart()">刷新</button></div>
        <div ref="chartMainRatio" class="chart-box" style="height:500px"></div>
      </div>
      <div class="card">
        <div class="section-header"><div class="card-title">细分方向 × 会议类别</div><button class="btn btn-secondary btn-sm" @click="renderHeatmapChart()">刷新</button></div>
        <div ref="chartHeatmap" class="chart-box" style="height:500px"></div>
      </div>
    </div>

    <div class="chart-grid">
      <div class="card">
        <div class="card-title">热门细分方向 Top 20</div>
        <ol class="rank-list">
          <li v-for="(item, i) in topSubs" :key="item[0]" class="rank-item" @click="showSubcategoryPapers(item[0])" style="cursor:pointer">
            <span class="rank-num" :class="{ top3: i < 3 }">{{ i + 1 }}</span>
            <span class="rank-name">{{ item[0] }}</span>
            <span class="rank-count">{{ item[1] }} 篇</span>
          </li>
        </ol>
      </div>
      <div class="card">
        <div class="card-title">主会论文占比最高的细分方向</div>
        <ol class="rank-list">
          <li v-for="(item, i) in topMainRatio" :key="item.name" class="rank-item" @click="showSubcategoryPapers(item.name)" style="cursor:pointer">
            <span class="rank-num" :class="{ top3: i < 3 }">{{ i + 1 }}</span>
            <span class="rank-name">{{ item.name }}</span>
            <span class="rank-count">{{ (item.ratio * 100).toFixed(1) }}%</span>
          </li>
        </ol>
      </div>
    </div>

    <!-- 论文列表弹层 -->
    <div v-if="selectedLabel" class="overlay-panel">
      <div style="max-width:1200px;margin:0 auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px">
          <h2 style="color:#fff;margin:0">{{ selectedLabel }} <span style="color:rgba(255,255,255,0.5);font-size:16px;font-weight:normal">({{ selSortedPapers.length }} 篇论文)</span></h2>
          <div style="display:flex;gap:10px;align-items:center">
            <select v-model="selSortBy" @change="resetSelPage()" style="padding:8px 12px;border:1px solid #404040;border-radius:8px;background:#262626;color:#e5e5e5;font-size:13px;cursor:pointer">
              <option value="default">默认排序</option>
              <option value="venue">按会议类别</option>
              <option value="title">按标题字母</option>
            </select>
            <button class="btn btn-secondary" @click="selectedLabel = ''">关闭</button>
          </div>
        </div>
        <div class="result-info">共 {{ selSortedPapers.length }} 篇，第 {{ selPage }} / {{ selTotalPages }} 页</div>
        <div v-for="(paper, idx) in selPagePapers" :key="paper.id" class="paper-item" @click="showPaperDetail(paper)">
          <div style="display:flex;gap:12px;align-items:flex-start">
            <span style="color:rgba(255,255,255,0.3);font-size:12px;min-width:40px;padding-top:4px">#{{ (selPage-1)*20 + idx + 1 }}</span>
            <div style="flex:1">
              <div class="paper-title">{{ paper.title }}</div>
              <div class="paper-meta">
                <span class="venue-badge" :class="store.getVenueClass(paper.venue)">{{ store.getVenueLabel(paper.venue) }}</span>
                <span class="sub-badge">{{ paper.subcategory }}</span>
                <a :href="scholarUrl(paper.title)" target="_blank" class="scholar-link" @click.stop>Google Scholar</a>
                <span class="paper-authors">{{ (paper.authors||[]).slice(0,3).join(', ') }}</span>
              </div>
            </div>
          </div>
        </div>
        <div v-if="selectedPapers.length === 0" class="no-data">未找到相关论文</div>
        <div v-if="selTotalPages > 1" style="display:flex;align-items:center;justify-content:center;gap:16px;margin-top:24px;flex-wrap:wrap">
          <div class="pagination" style="margin:0">
            <button class="page-btn" :class="{ disabled: selPage <= 1 }" @click="selPage--; scrollSelTop()">‹</button>
            <button v-for="p in selVisiblePages" :key="p" class="page-btn" :class="{ active: p === selPage }" @click="selPage = p; scrollSelTop()">{{ p }}</button>
            <button class="page-btn" :class="{ disabled: selPage >= selTotalPages }" @click="selPage++; scrollSelTop()">›</button>
          </div>
          <div style="display:flex;align-items:center;gap:8px">
            <span style="color:rgba(255,255,255,0.5);font-size:13px">跳转到</span>
            <input v-model="selJumpPage" @keyup.enter="selGoToPage()" placeholder="页码" style="width:60px;padding:6px 10px;border:1px solid #404040;border-radius:6px;background:#262626;color:#e5e5e5;font-size:13px;text-align:center">
            <button class="btn btn-secondary" @click="selGoToPage()" style="padding:6px 12px;font-size:13px">确定</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 论文详情弹层 -->
    <div v-if="detailPaper" class="overlay-panel" style="z-index:400;background:rgba(30,30,30,0.98)">
      <div style="max-width:1000px;margin:0 auto">
        <button class="btn btn-secondary" @click="detailPaper = null" style="margin-bottom:20px">← 返回论文列表</button>
        <div class="card">
          <div class="detail-title">{{ detailPaper.title }}</div>
          <div class="detail-meta">
            <span class="venue-badge" :class="store.getVenueClass(detailPaper.venue)" style="font-size:13px;padding:5px 14px">{{ store.getVenueLabel(detailPaper.venue) }}</span>
            <span class="sub-badge" style="font-size:13px;padding:5px 14px">{{ detailPaper.subcategory }}</span>
          </div>
          <div style="margin-top:12px;color:rgba(255,255,255,0.6);font-size:14px"><strong>作者:</strong> {{ (detailPaper.authors||[]).join(', ') }}</div>
          <div style="margin-top:8px;color:rgba(255,255,255,0.6);font-size:14px"><strong>方向:</strong> {{ detailPaper.category }} → {{ detailPaper.subcategory }}</div>
          <div style="margin-top:8px;color:rgba(255,255,255,0.6);font-size:14px"><strong>论文ID:</strong> {{ detailPaper.id }}</div>
          <div style="margin-top:12px;display:flex;gap:10px;flex-wrap:wrap">
            <a v-if="anthologyUrl(detailPaper)" :href="anthologyUrl(detailPaper)" target="_blank" class="btn btn-primary" style="display:inline-flex;align-items:center;gap:8px;text-decoration:none;font-size:13px"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> 在 ACL Anthology 中查看</a>
            <a v-if="detailPaper.pdf_url" :href="detailPaper.pdf_url" target="_blank" class="btn btn-secondary" style="display:inline-flex;align-items:center;gap:8px;text-decoration:none;font-size:13px">查看 PDF</a>
          </div>
        </div>
        <div class="card"><div class="abstract-section"><div class="abstract-label"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> 英文摘要</div><div class="abstract-content">{{ detailPaper.abstract_en || '暂无' }}</div></div></div>
        <div class="card"><div class="abstract-section"><div class="abstract-label"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> 中文摘要</div><div class="abstract-content">{{ detailPaper.abstract_zh || '暂无翻译' }}</div></div></div>
      </div>
    </div>
  </div>
</template>
