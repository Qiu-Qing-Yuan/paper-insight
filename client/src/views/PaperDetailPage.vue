<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import * as echarts from 'echarts'
import { usePapersStore } from '../stores/papers'
import { scholarUrl } from '../utils'
import { getChartColors } from '../composables/useTheme'

const store = usePapersStore()
const route = useRoute()

const activeTab = ref('abstract')
const abstractLang = ref<'en' | 'zh'>('en')
const copied = ref(false)
const venueChartEl = ref<HTMLElement | null>(null)
const searchText = ref('')
let venueChart: echarts.ECharts | null = null

const avatarColors = ['#2563eb','#3b82f6','#0ea5e9','#06b6d4','#14b8a6','#22c55e','#84cc16','#eab308','#f97316','#ef4444']

const paper = computed(() => {
  const id = decodeURIComponent(route.params.id as string || '')
  return store.papers.find(p => p.id === id) || null
})

const relatedPapers = computed(() => {
  if (!paper.value) return []
  return store.papers
    .filter(p => p.subcategory === paper.value!.subcategory && p.id !== paper.value!.id)
    .slice(0, 5)
})

const bibtex = computed(() => {
  if (!paper.value) return ''
  const p = paper.value
  const authors = (p.authors || []).join(' and ')
  const key = (p.authors?.[0]?.split(' ').pop()?.toLowerCase() || 'unknown') + p.id.replace(/[^a-z0-9]/gi, '')
  return `@inproceedings{${key},
  title     = {${p.title}},
  author    = {${authors}},
  booktitle = {Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (ACL 2025)},
  year      = {2025},
  url       = {https://aclanthology.org/${p.id}/}
}`
})

function avatarColor(i: number) { return avatarColors[i % avatarColors.length] }

function doSearch() {
  if (searchText.value.trim()) {
    window.location.hash = '#/papers?search=' + encodeURIComponent(searchText.value.trim())
  }
}

function copyBibTeX() {
  navigator.clipboard.writeText(bibtex.value).then(() => {
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  })
}

function renderVenueChart() {
  const el = venueChartEl.value
  if (!el || !paper.value) return
  const sub = paper.value.subcategory
  const venueData: Record<string, number> = {}
  store.papers.filter(p => p.subcategory === sub).forEach(p => {
    const v = p.venue || '未知'
    venueData[v] = (venueData[v] || 0) + 1
  })
  const data = Object.entries(venueData).sort((a, b) => b[1] - a[1])
  if (data.length === 0) { el.innerHTML = '<div class="chart-loading">暂无数据</div>'; return }
  const c = getChartColors()
  if (venueChart) { venueChart.dispose(); venueChart = null }
  el.innerHTML = ''
  venueChart = echarts.init(el)
  venueChart.setOption({
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    grid: { left: '8%', right: '8%', bottom: '12%', top: '8%', containLabel: true },
    xAxis: {
      type: 'category',
      data: data.map(d => d[0].length > 6 ? d[0].substring(0, 6) + '…' : d[0]),
      axisLabel: { color: c.label, fontSize: 10, rotate: 20 },
      axisLine: { lineStyle: { color: c.axisLine } }
    },
    yAxis: {
      type: 'value',
      axisLabel: { color: c.label, fontSize: 10 },
      splitLine: { lineStyle: { color: c.splitLine } },
      axisLine: { lineStyle: { color: c.axisLine } }
    },
    series: [{
      type: 'bar',
      data: data.map((d, i) => ({
        value: d[1],
        itemStyle: { color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: avatarColors[i % avatarColors.length] }, { offset: 1, color: avatarColors[(i + 1) % avatarColors.length] }]) }
      })),
      barWidth: '50%',
      itemStyle: { borderRadius: [4, 4, 0, 0] }
    }]
  })
}

onMounted(() => {
  watch(() => store.papers.length, () => {
    if (paper.value) nextTick(renderVenueChart)
  }, { immediate: true })
  watch(() => route.params.id, () => {
    activeTab.value = 'abstract'
    abstractLang.value = 'en'
    nextTick(renderVenueChart)
  })
})

onUnmounted(() => {
  if (venueChart) venueChart.dispose()
})
</script>

<template>
  <div class="detail-page">
    <div class="detail-breadcrumb" style="display:flex;justify-content:space-between;align-items:center">
      <div style="display:flex;align-items:center;gap:8px">
        <router-link to="/papers">Papers</router-link>
        <span class="sep">></span>
        <span>论文列表</span>
      </div>
      <div style="display:flex;align-items:center;gap:10px">
        <input v-model="searchText" @keyup.enter="doSearch" placeholder="输入关键词搜索..." style="width:240px;padding:7px 14px;border:1px solid #404040;border-radius:8px;background:#1e1e1e;color:#e5e5e5;font-size:13px">
        <button class="btn btn-secondary" @click="doSearch" style="padding:7px 14px;font-size:13px">搜索</button>
      </div>
    </div>

    <template v-if="paper">
      <div class="detail-main">
        <div class="card">
          <h1 class="detail-main-title">{{ paper.title }}</h1>
          <div class="detail-main-meta">
            <span class="venue-badge" :class="store.getVenueClass(paper.venue)" style="font-size:12px;padding:4px 12px">{{ paper.venue }}</span>
            <span class="id-text">ID: {{ paper.id }}</span>
            <a :href="'https://aclanthology.org/' + paper.id + '/'" target="_blank" class="pdf-link">PDF</a>
            <a :href="scholarUrl(paper.title)" target="_blank" class="scholar-link" style="font-size:12px;padding:4px 12px">Google Scholar</a>
          </div>

          <div class="detail-authors">
            <div v-for="(author, i) in paper.authors" :key="i" class="author-chip">
              <div class="author-avatar" :style="{ background: avatarColor(i) }">{{ author.charAt(0).toUpperCase() }}</div>
              <span class="author-name">{{ author }}</span>
            </div>
          </div>

          <div class="detail-tabs">
            <button class="detail-tab" :class="{ active: activeTab === 'abstract' }" @click="activeTab = 'abstract'">摘要</button>
            <button class="detail-tab" :class="{ active: activeTab === 'detail' }" @click="activeTab = 'detail'">详情</button>
            <button class="detail-tab" :class="{ active: activeTab === 'cite' }" @click="activeTab = 'cite'">引用</button>
          </div>

          <div v-show="activeTab === 'abstract'">
            <div class="abstract-lang-toggle">
              <button class="abstract-lang-btn" :class="{ active: abstractLang === 'en' }" @click="abstractLang = 'en'">English</button>
              <button class="abstract-lang-btn" :class="{ active: abstractLang === 'zh' }" @click="abstractLang = 'zh'">中文</button>
            </div>
            <div class="detail-abstract-text">{{ abstractLang === 'en' ? (paper.abstract_en || '暂无英文摘要') : (paper.abstract_zh || '暂无中文翻译') }}</div>
          </div>

          <div v-show="activeTab === 'detail'">
            <div class="detail-info-grid">
              <div class="detail-info-label">论文ID</div><div class="detail-info-value">{{ paper.id }}</div>
              <div class="detail-info-label">会议类别</div><div class="detail-info-value"><span class="venue-badge" :class="store.getVenueClass(paper.venue)">{{ paper.venue }}</span></div>
              <div class="detail-info-label">一级方向</div><div class="detail-info-value">{{ paper.category }}</div>
              <div class="detail-info-label">细分方向</div><div class="detail-info-value">{{ paper.subcategory }}</div>
              <div class="detail-info-label">作者</div><div class="detail-info-value">{{ (paper.authors||[]).join(', ') }}</div>
              <div class="detail-info-label">ACL链接</div><div class="detail-info-value"><a :href="'https://aclanthology.org/' + paper.id + '/'" target="_blank" style="color:#2563eb;text-decoration:none">https://aclanthology.org/{{ paper.id }}/</a></div>
              <div class="detail-info-label">Google Scholar</div><div class="detail-info-value"><a :href="scholarUrl(paper.title)" target="_blank" style="color:#3b82f6;text-decoration:none">在 Google Scholar 中搜索</a></div>
            </div>
          </div>

          <div v-show="activeTab === 'cite'">
            <div class="detail-citation">
              <div class="detail-citation-title">引用此论文</div>
              <div class="citation-box">
                <button class="copy-btn" :class="{ copied }" @click="copyBibTeX">{{ copied ? '已复制' : '复制' }}</button>
{{ bibtex }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="detail-sidebar">
        <div class="sidebar-card">
          <div class="sidebar-card-title">论文的研究方向</div>
          <div class="sidebar-direction">
            <div class="dir-row">
              <span class="dir-label">方向</span>
              <span class="dir-badge venue-main" style="font-size:13px">{{ paper.category }}</span>
            </div>
            <div class="dir-row">
              <span class="dir-label">细分</span>
              <span class="dir-badge" style="background:rgba(37,99,235,0.15);color:#3b82f6;font-size:13px">{{ paper.subcategory }}</span>
            </div>
          </div>
        </div>

        <div class="sidebar-card">
          <div class="sidebar-card-title">venue分布</div>
          <div ref="venueChartEl" class="sidebar-venue-chart"></div>
        </div>

        <div class="sidebar-card">
          <div class="sidebar-card-title">相关论文推荐</div>
          <div class="related-list">
            <router-link v-for="rp in relatedPapers" :key="rp.id" :to="'/paper/' + encodeURIComponent(rp.id)" class="related-item">
              <div class="related-item-title">{{ rp.title }}</div>
              <div class="related-item-meta">
                <span class="venue-badge" :class="store.getVenueClass(rp.venue)" style="font-size:10px;padding:2px 8px">{{ rp.venue }}</span>
                <a :href="scholarUrl(rp.title)" target="_blank" class="scholar-link" @click.stop>Google Scholar</a>
              </div>
            </router-link>
            <div v-if="relatedPapers.length === 0" style="color:rgba(255,255,255,0.3);font-size:13px;padding:10px 0">暂无相关论文</div>
          </div>
        </div>
      </div>
    </template>

    <template v-else>
      <div style="grid-column:1/-1;text-align:center;padding:80px 0">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:16px;opacity:0.4"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
        <div style="color:rgba(255,255,255,0.5);font-size:16px">未找到该论文</div>
        <router-link to="/papers" class="btn btn-primary" style="display:inline-block;margin-top:20px;text-decoration:none">返回论文列表</router-link>
      </div>
    </template>
  </div>
</template>
