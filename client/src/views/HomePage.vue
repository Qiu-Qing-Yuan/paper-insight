<script setup lang="ts">
import { computed } from 'vue'
import { usePapersStore } from '../stores/papers'

const store = usePapersStore()

const sortedCatSubMap = computed(() => {
  const result: Record<string, Record<string, number>> = {}
  Object.keys(store.catSubMap)
    .sort((a, b) => (store.categories[b] || 0) - (store.categories[a] || 0))
    .forEach(cat => {
      result[cat] = store.catSubMap[cat]
    })
  return result
})

const isACL = computed(() => store.activeConference === 'ACL')
</script>

<template>
  <div class="main">
    <div class="stats-grid">
      <div v-if="store.loading || store.externalLoading" v-for="i in 5" :key="i" class="card stat-skeleton" style="height:110px"></div>
      <template v-else>
        <div class="card stat-card stat-card-1"><div class="stat-number">{{ store.papers.length }}</div><div class="stat-label">总论文数</div></div>
        <div class="card stat-card stat-card-2" v-if="store.hasVenueTypes"><div class="stat-number">{{ store.mainCount }}</div><div class="stat-label">主会论文</div></div>
        <div class="card stat-card stat-card-3" v-if="store.hasVenueTypes"><div class="stat-number">{{ store.findingsCount }}</div><div class="stat-label">Findings</div></div>
        <div class="card stat-card stat-card-4"><div class="stat-number">{{ Object.keys(store.subcategories).length }}</div><div class="stat-label">细分方向</div></div>
        <div class="card stat-card stat-card-5" v-if="isACL"><div class="stat-number">{{ store.translatedCount }}</div><div class="stat-label">已翻译</div></div>
      </template>
    </div>

    <div class="card">
      <div class="section-header">
        <div class="card-title">快速导航</div>
      </div>
      <div class="home-cards">
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
        <router-link to="/charts" class="home-card">
          <div class="home-card-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
            </svg>
          </div>
          <div class="home-card-title">统计图表</div>
          <div class="home-card-desc">细分方向分布、热力图</div>
        </router-link>
      </div>
    </div>

    <div class="card">
      <div class="section-header">
        <div class="card-title">细分研究方向概览</div>
      </div>
      <div v-if="store.loading || store.externalLoading" class="loading-sm">正在加载数据...</div>
      <div v-else>
        <div v-for="(subs, cat) in sortedCatSubMap" :key="cat" class="cat-group">
          <div class="cat-group-title">{{ cat }} ({{ store.categories[cat] }} 篇)</div>
          <div class="cat-group-items">
            <router-link v-for="(count, sub) in subs" :key="sub" :to="'/papers?sub=' + encodeURIComponent(String(sub))" class="sub-item" style="text-decoration:none">
              <span class="sub-item-name">{{ sub }}</span>
              <span class="sub-item-count">{{ count }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
