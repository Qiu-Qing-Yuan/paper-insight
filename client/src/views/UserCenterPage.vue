<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { usePapersStore } from '../stores/papers'

const store = usePapersStore()

const visitCount = ref(0)
const favoriteCount = ref(0)
const historyCount = ref(0)

onMounted(() => {
  visitCount.value = parseInt(localStorage.getItem('acl_visit_count') || '0') + 1
  localStorage.setItem('acl_visit_count', String(visitCount.value))
  favoriteCount.value = parseInt(localStorage.getItem('acl_favorites_count') || '0')
  historyCount.value = parseInt(localStorage.getItem('acl_history_count') || '0')
})

function clearCache() {
  localStorage.removeItem('acl_visit_count')
  localStorage.removeItem('acl_favorites_count')
  localStorage.removeItem('acl_history_count')
  visitCount.value = 0
  favoriteCount.value = 0
  historyCount.value = 0
}
</script>

<template>
  <div class="main">
    <div class="user-header">
      <div class="user-avatar-lg">U</div>
      <div class="user-info">
        <div class="user-name-lg">研究者</div>
        <div class="user-role">Paper Insight 用户</div>
      </div>
    </div>

    <div class="stats-grid" style="grid-template-columns:repeat(4,1fr)">
      <div class="card stat-card">
        <div class="stat-number">{{ store.papers.length }}</div>
        <div class="stat-label">平台论文总数</div>
      </div>
      <div class="card stat-card">
        <div class="stat-number">{{ visitCount }}</div>
        <div class="stat-label">访问次数</div>
      </div>
      <div class="card stat-card">
        <div class="stat-number">{{ favoriteCount }}</div>
        <div class="stat-label">收藏论文</div>
      </div>
      <div class="card stat-card">
        <div class="stat-number">{{ historyCount }}</div>
        <div class="stat-label">浏览历史</div>
      </div>
    </div>

    <div class="settings-grid">
      <div class="card">
        <div class="card-title">平台统计</div>
        <div class="info-list">
          <!-- ACL/EMNLP categories -->
          <div class="info-row" v-if="!store.isOpenReview && store.mainCount > 0">
            <span class="info-label">主会论文</span>
            <span class="info-value">{{ store.mainCount }} 篇</span>
          </div>
          <div class="info-row" v-if="!store.isOpenReview && store.findingsCount > 0">
            <span class="info-label">已收录</span>
            <span class="info-value">{{ store.findingsCount }} 篇</span>
          </div>
          <div class="info-row" v-if="!store.isOpenReview && store.otherCount > 0">
            <span class="info-label">其他</span>
            <span class="info-value">{{ store.otherCount }} 篇</span>
          </div>
          <!-- OpenReview categories -->
          <div class="info-row" v-if="store.isOpenReview && store.oralCount > 0">
            <span class="info-label">Oral</span>
            <span class="info-value">{{ store.oralCount }} 篇</span>
          </div>
          <div class="info-row" v-if="store.isOpenReview && store.spotlightCount > 0">
            <span class="info-label">Spotlight</span>
            <span class="info-value">{{ store.spotlightCount }} 篇</span>
          </div>
          <div class="info-row" v-if="store.isOpenReview && store.posterCount > 0">
            <span class="info-label">Poster</span>
            <span class="info-value">{{ store.posterCount }} 篇</span>
          </div>
          <!-- Common -->
          <div class="info-row" v-if="store.workshopCount > 0">
            <span class="info-label">研讨会</span>
            <span class="info-value">{{ store.workshopCount }} 篇</span>
          </div>
          <div class="info-row">
            <span class="info-label">已翻译</span>
            <span class="info-value">{{ store.translatedCount }} 篇</span>
          </div>
          <div class="info-row">
            <span class="info-label">细分方向</span>
            <span class="info-value">{{ Object.keys(store.subcategories).length }} 个</span>
          </div>
          <div class="info-row">
            <span class="info-label">一级方向</span>
            <span class="info-value">{{ Object.keys(store.categories).length }} 个</span>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">数据管理</div>
        <div class="info-list">
          <div class="info-row">
            <span class="info-label">本地缓存</span>
            <button class="btn btn-secondary" @click="clearCache" style="font-size:12px;padding:5px 14px">清除</button>
          </div>
          <div class="info-row">
            <span class="info-label">论文数据</span>
            <button class="btn btn-secondary" @click="store.loadPapers()" style="font-size:12px;padding:5px 14px">重新加载</button>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">关于平台</div>
        <div class="info-list">
          <div class="info-row">
            <span class="info-label">平台名称</span>
            <span class="info-value">Paper Insight</span>
          </div>
          <div class="info-row">
            <span class="info-label">版本</span>
            <span class="info-value">v2.0.0</span>
          </div>
          <div class="info-row">
            <span class="info-label">技术栈</span>
            <span class="info-value">Vue 3 + Vite + TypeScript + Pinia</span>
          </div>
          <div class="info-row">
            <span class="info-label">数据来源</span>
            <span class="info-value">ACL Anthology</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
