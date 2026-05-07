<script setup lang="ts">
import { ref, reactive, computed, watch, onMounted, onUnmounted } from 'vue'
import * as echarts from 'echarts'
import 'echarts-wordcloud'
import { usePapersStore } from '../stores/papers'
import { usePaperFilter } from '../composables/usePaperFilter'
import { usePagination } from '../composables/usePagination'
import { fetchKeywords } from '../api'
import { scholarUrl, anthologyUrl } from '../utils'
import { getChartColors } from '../composables/useTheme'

const store = usePapersStore()
const { filter, sortedCategories, sortedSubcategories, filtered: filteredPapers, resetFilter } = usePaperFilter()

const currentCat = ref('all')
const wcCanvas = ref<HTMLElement | null>(null)
const keywordsBar = ref<HTMLElement | null>(null)
const keywordsCount = ref<HTMLElement | null>(null)
const selectedKeyword = ref('')
const keywordPapers = ref<any[]>([])
const detailPaper = ref<any>(null)
const kwSortBy = ref('default')

let wcChart: echarts.ECharts | null = null
let barChart: echarts.ECharts | null = null
let countChart: echarts.ECharts | null = null

const venueOptions = computed(() => {
  const opts: { value: string; label: string }[] = []
  if (store.mainCount > 0) opts.push({ value: '主会', label: `主会 (${store.mainCount})` })
  if (store.oralCount > 0) opts.push({ value: 'Oral', label: `Oral (${store.oralCount})` })
  if (store.spotlightCount > 0) opts.push({ value: 'Spotlight', label: `Spotlight (${store.spotlightCount})` })
  if (store.posterCount > 0) opts.push({ value: 'Poster', label: `Poster (${store.posterCount})` })
  if (store.longPaperCount > 0) opts.push({ value: '主会-长文', label: `长文 (${store.longPaperCount})` })
  if (store.shortPaperCount > 0) opts.push({ value: '主会-短文', label: `短文 (${store.shortPaperCount})` })
  if (store.findingsCount > 0) opts.push({ value: 'Findings', label: `Findings (${store.findingsCount})` })
  if (store.industryCount > 0) opts.push({ value: '工业Track', label: `工业Track (${store.industryCount})` })
  if (store.demoCount > 0) opts.push({ value: '系统演示', label: `系统演示 (${store.demoCount})` })
  if (store.studentCount > 0) opts.push({ value: '学生研讨会', label: `学生研讨会 (${store.studentCount})` })
  if (store.tutorialCount > 0) opts.push({ value: '教程', label: `教程 (${store.tutorialCount})` })
  if (store.workshopCount > 0) opts.push({ value: 'Workshop', label: `Workshop (${store.workshopCount})` })
  return opts
})

const filteredSubcategories = computed(() => {
  const subs: Record<string, number> = {}
  filteredPapers.value.forEach(p => {
    const s = p.subcategory || ''
    if (s) subs[s] = (subs[s] || 0) + 1
  })
  return Object.fromEntries(Object.entries(subs).sort((a, b) => b[1] - a[1]))
})

const kwSortedPapers = computed(() => {
  const arr = [...keywordPapers.value]
  if (kwSortBy.value === 'venue') arr.sort((a, b) => (a.venue || '').localeCompare(b.venue || ''))
  else if (kwSortBy.value === 'title') arr.sort((a, b) => (a.title || '').localeCompare(b.title || ''))
  return arr
})

const { page: kwPage, jumpPage: kwJumpPage, totalPages: kwTotalPages, pagePapers: kwPagePapers, visiblePages: kwVisiblePages, goToJumpPage: kwGoToPage, scrollTop: scrollKwTop, resetPage: resetKwPage } = usePagination(kwSortedPapers, 20)

function onFilterChange() {
  currentCat.value = 'all'
  renderAll()
}

function handleResetFilters() {
  resetFilter()
  currentCat.value = 'all'
  renderAll()
}

function switchLang(lang: 'en' | 'zh') {
  store.lang = lang
  renderAll()
}

function renderAll() {
  renderWordcloud()
  renderKeywordsBar()
  renderKeywordsCount()
}

function findPapersByKeyword(keyword: string) {
  const kw = keyword.toLowerCase()
  return filteredPapers.value.filter(p => {
    const title = (p.title || '').toLowerCase()
    const abstractEn = (p.abstract_en || '').toLowerCase()
    const abstractZh = p.abstract_zh || ''
    return title.includes(kw) || abstractEn.includes(kw) || abstractZh.includes(keyword)
  })
}

function showPaperDetail(paper: any) {
  detailPaper.value = paper
}

async function renderWordcloud() {
  const el = wcCanvas.value
  if (!el) return
  el.innerHTML = '<div class="chart-loading">正在加载词云...</div>'
  try {
    const sub = currentCat.value !== 'all' ? currentCat.value : undefined
    const kw = await fetchKeywords(store.lang, sub, store.papers)
    if (!kw || kw.length === 0) { el.innerHTML = '<div class="chart-loading">暂无数据</div>'; return }
    if (wcChart) { wcChart.dispose(); wcChart = null }
    el.innerHTML = ''
    wcChart = echarts.init(el)
    wcChart.setOption({
      series: [{
        type: 'wordCloud', shape: 'circle', keepAspect: false, left: 'center', top: 'center', width: '90%', height: '90%',
        sizeRange: [14, 60], rotationRange: [-30, 30], rotationStep: 15, gridSize: 8, drawOutOfBound: false,
        textStyle: {
          fontFamily: store.lang === 'zh' ? "'PingFang SC','Microsoft YaHei',sans-serif" : "-apple-system,sans-serif",
          fontWeight: 'bold',
          color() { const c = ['#2563eb','#3b82f6','#60a5fa','#0ea5e9','#06b6d4','#14b8a6','#22c55e','#84cc16','#eab308','#f97316','#ef4444','#8b5cf6']; return c[Math.floor(Math.random() * c.length)] }
        },
        data: kw.slice(0, 120).map(item => ({ name: item[0], value: item[1] }))
      }]
    })
    wcChart.on('click', (params: any) => {
      if (params.name) {
        selectedKeyword.value = params.name
        keywordPapers.value = findPapersByKeyword(params.name)
        kwSortBy.value = 'default'
        resetKwPage()
      }
    })
  } catch (e) {
    console.error(e)
    el.innerHTML = '<div class="chart-loading" style="color:#f5576c">加载失败</div>'
  }
}

async function renderKeywordsBar() {
  const el = keywordsBar.value
  if (!el) return
  el.innerHTML = '<div class="chart-loading">正在加载...</div>'
  try {
    const sub = currentCat.value !== 'all' ? currentCat.value : undefined
    const kw = await fetchKeywords(store.lang, sub, store.papers)
    if (!kw || kw.length === 0) { el.innerHTML = '<div class="chart-loading">暂无数据</div>'; return }
    const top = kw.slice(0, 30)
    if (barChart) { barChart.dispose(); barChart = null }
    el.innerHTML = ''
    const c = getChartColors()
    barChart = echarts.init(el)
    barChart.setOption({
      tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
      grid: { left: '3%', right: '8%', bottom: '3%', top: '3%', containLabel: true },
      xAxis: { type: 'value', axisLabel: { color: c.label, fontSize: 11 }, splitLine: { lineStyle: { color: c.splitLine } }, axisLine: { lineStyle: { color: c.axisLine } } },
      yAxis: { type: 'category', data: top.map(k => k[0]).reverse(), axisLabel: { color: c.labelBright, fontSize: 11, fontFamily: store.lang === 'zh' ? "'PingFang SC','Microsoft YaHei',sans-serif" : "sans-serif" }, axisLine: { lineStyle: { color: c.axisLine } } },
      series: [{ type: 'bar', data: top.map(k => k[1]).reverse(), barWidth: '60%', itemStyle: { borderRadius: [0, 4, 4, 0], color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{ offset: 0, color: '#2563eb' }, { offset: 1, color: '#3b82f6' }]) } }]
    })
    barChart.on('click', (params: any) => {
      if (params.name) {
        selectedKeyword.value = params.name
        keywordPapers.value = findPapersByKeyword(params.name)
        kwSortBy.value = 'default'
        resetKwPage()
      }
    })
  } catch (e) {
    console.error(e)
    el.innerHTML = '<div class="chart-loading" style="color:#f5576c">加载失败</div>'
  }
}

async function renderKeywordsCount() {
  const el = keywordsCount.value
  if (!el) return
  el.innerHTML = '<div class="chart-loading">正在加载...</div>'
  const subs = Object.keys(store.subcategories).sort((a, b) => store.subcategories[b] - store.subcategories[a]).slice(0, 20)
  if (subs.length === 0) { el.innerHTML = '<div class="chart-loading">暂无数据</div>'; return }
  try {
    const results = await Promise.all(subs.map(sub => fetchKeywords(store.lang, sub, store.papers).catch(() => [])))
    const data = subs.map((sub, i) => ({ name: store.getSubName(sub), value: results[i] ? results[i].length : 0 }))
    if (countChart) { countChart.dispose(); countChart = null }
    el.innerHTML = ''
    const c = getChartColors()
    countChart = echarts.init(el)
    countChart.setOption({
      tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
      grid: { left: '3%', right: '8%', bottom: '3%', top: '3%', containLabel: true },
      xAxis: { type: 'value', axisLabel: { color: c.label, fontSize: 11 }, splitLine: { lineStyle: { color: c.splitLine } }, axisLine: { lineStyle: { color: c.axisLine } } },
      yAxis: { type: 'category', data: data.map(d => d.name).reverse(), axisLabel: { color: c.labelBright, fontSize: 11, fontFamily: store.lang === 'zh' ? "'PingFang SC','Microsoft YaHei',sans-serif" : "sans-serif" }, axisLine: { lineStyle: { color: c.axisLine } } },
      series: [{ type: 'bar', data: data.map(d => d.value).reverse(), barWidth: '60%', itemStyle: { borderRadius: [0, 4, 4, 0], color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{ offset: 0, color: '#14b8a6' }, { offset: 1, color: '#22c55e' }]) } }]
    })
  } catch (e) {
    console.error(e)
    el.innerHTML = '<div class="chart-loading" style="color:#f5576c">加载失败</div>'
  }
}

let themeObserver: MutationObserver | null = null

onMounted(() => {
  watch(() => store.papers.length, (len) => {
    if (len > 0) renderAll()
  }, { immediate: true })
  themeObserver = new MutationObserver(() => {
    if (store.papers.length > 0) renderAll()
  })
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
})

onUnmounted(() => {
  if (wcChart) wcChart.dispose()
  if (barChart) barChart.dispose()
  if (countChart) countChart.dispose()
  if (themeObserver) themeObserver.disconnect()
})
</script>

<template>
  <div class="main">
    <div class="card">
      <div class="section-header">
        <div class="card-title">词云分析（名词性关键词）</div>
        <div class="header-actions">
          <button class="btn btn-secondary btn-sm" @click="handleResetFilters">重置</button>
          <button class="btn btn-primary btn-sm" @click="store.loadPapers()">刷新数据</button>
        </div>
      </div>
      <p style="color:var(--text-muted);margin-bottom:16px;font-size:14px">仅保留名词性词汇，支持中英文切换，点击词云中的词可查看相关论文</p>
      <div class="filters">
        <div class="filter-group"><label>一级方向</label><select v-model="filter.category" @change="onFilterChange"><option value="">全部方向</option><option v-for="c in sortedCategories" :key="c" :value="c">{{ c }} ({{ store.categories[c] }})</option></select></div>
        <div class="filter-group"><label>细分方向</label><select v-model="filter.subcategory" @change="onFilterChange"><option value="">全部细分</option><option v-for="s in sortedSubcategories" :key="s" :value="s">{{ s }} ({{ store.subcategories[s] }})</option></select></div>
        <div class="filter-group" v-if="venueOptions.length > 0"><label>会议类别</label><select v-model="filter.venue" @change="onFilterChange"><option value="">全部类别</option><option v-for="opt in venueOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option></select></div>
        <div class="filter-group"><label>关键词搜索</label><input v-model="filter.search" @input="onFilterChange" placeholder="搜索标题、摘要..."></div>
      </div>
      <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap;margin-bottom:16px">
        <div class="lang-toggle">
          <button class="lang-btn" :class="{ active: store.lang === 'en' }" @click="switchLang('en')">English</button>
          <button class="lang-btn" :class="{ active: store.lang === 'zh' }" @click="switchLang('zh')">中文</button>
        </div>
        <div style="color:rgba(255,255,255,0.5);font-size:13px">当前筛选: {{ filteredPapers.length }} 篇论文</div>
      </div>
      <div class="wordcloud-tabs">
        <span class="wc-tab" :class="{ active: currentCat === 'all' }" @click="currentCat = 'all'; renderAll()">全局词云</span>
        <span v-for="(count, sub) in filteredSubcategories" :key="sub" class="wc-tab" :class="{ active: currentCat === String(sub) }" @click="currentCat = String(sub); renderAll()">{{ store.getSubName(String(sub)) }} ({{ count }})</span>
      </div>
      <div ref="wcCanvas" class="wc-canvas"></div>
    </div>

    <!-- 关键词论文弹层 -->
    <div v-if="selectedKeyword" class="overlay-panel">
      <div style="max-width:1200px;margin:0 auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px">
          <h2 style="color:#fff;margin:0">关键词: "{{ selectedKeyword }}" <span style="color:rgba(255,255,255,0.5);font-size:16px;font-weight:normal">({{ kwSortedPapers.length }} 篇相关论文)</span></h2>
          <div style="display:flex;gap:10px;align-items:center">
            <select v-model="kwSortBy" @change="resetKwPage()" style="padding:8px 12px;border:1px solid #404040;border-radius:8px;background:#262626;color:#e5e5e5;font-size:13px;cursor:pointer">
              <option value="default">默认排序</option>
              <option value="venue">按会议类别</option>
              <option value="title">按标题字母</option>
            </select>
            <button class="btn btn-secondary" @click="selectedKeyword = ''">关闭</button>
          </div>
        </div>
        <div class="result-info">共 {{ kwSortedPapers.length }} 篇，第 {{ kwPage }} / {{ kwTotalPages }} 页</div>
        <div v-for="(paper, idx) in kwPagePapers" :key="paper.id" class="paper-item" @click="showPaperDetail(paper)">
          <div style="display:flex;gap:12px;align-items:flex-start">
            <span style="color:rgba(255,255,255,0.3);font-size:12px;min-width:40px;padding-top:4px">#{{ (kwPage-1)*20 + idx + 1 }}</span>
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
        <div v-if="kwSortedPapers.length === 0" class="no-data">未找到相关论文</div>
        <div v-if="kwTotalPages > 1" style="display:flex;align-items:center;justify-content:center;gap:16px;margin-top:24px;flex-wrap:wrap">
          <div class="pagination" style="margin:0">
            <button class="page-btn" :class="{ disabled: kwPage <= 1 }" @click="kwPage--; scrollKwTop()">‹</button>
            <button v-for="p in kwVisiblePages" :key="p" class="page-btn" :class="{ active: p === kwPage }" @click="kwPage = p; scrollKwTop()">{{ p }}</button>
            <button class="page-btn" :class="{ disabled: kwPage >= kwTotalPages }" @click="kwPage++; scrollKwTop()">›</button>
          </div>
          <div style="display:flex;align-items:center;gap:8px">
            <span style="color:rgba(255,255,255,0.5);font-size:13px">跳转到</span>
            <input v-model="kwJumpPage" @keyup.enter="kwGoToPage()" placeholder="页码" style="width:60px;padding:6px 10px;border:1px solid #404040;border-radius:6px;background:#262626;color:#e5e5e5;font-size:13px;text-align:center">
            <button class="btn btn-secondary" @click="kwGoToPage()" style="padding:6px 12px;font-size:13px">确定</button>
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

    <div class="chart-grid">
      <div class="card">
        <div class="section-header"><div class="card-title">高频名词关键词 Top 30 {{ currentCat !== 'all' ? '- ' + store.getSubName(currentCat) : '' }}</div><button class="btn btn-secondary btn-sm" @click="renderKeywordsBar()">刷新</button></div>
        <div ref="keywordsBar" class="chart-box" style="position:relative"></div>
      </div>
      <div class="card">
        <div class="section-header"><div class="card-title">各细分方向关键词数量</div><button class="btn btn-secondary btn-sm" @click="renderKeywordsCount()">刷新</button></div>
        <div ref="keywordsCount" class="chart-box" style="position:relative"></div>
      </div>
    </div>
  </div>
</template>
