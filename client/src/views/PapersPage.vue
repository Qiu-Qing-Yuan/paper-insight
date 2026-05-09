<script setup lang="ts">
import { ref, computed } from 'vue'
import { usePaginatedPapers } from '../composables/usePaginatedPapers'
import { usePapersStore } from '../stores/papers'
import { scholarUrl } from '../utils'

const store = usePapersStore()

const venueOptions = computed(() => store.venueFilterOptions)

const {
  category, subcategory, venue, search, sortBy,
  page, total, totalPages, loading, papers,
  filterOptions, visiblePages,
  applyFilter, applySort, resetFilter, goToPage, onSearchInput,
} = usePaginatedPapers()

const jumpPage = ref('')

function doJumpPage() {
  const p = parseInt(jumpPage.value)
  if (p >= 1 && p <= totalPages.value) {
    goToPage(p)
    jumpPage.value = ''
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

function scrollTopAndGo(p: number) {
  goToPage(p)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="main">
    <div class="card">
      <div class="section-header">
        <div class="card-title">筛选条件</div>
        <div class="header-actions">
          <button class="btn btn-secondary btn-sm" @click="resetFilter">重置</button>
        </div>
      </div>
      <div class="filters">
        <div class="filter-group">
          <label>一级方向</label>
          <select v-model="category" @change="applyFilter">
            <option value="">全部方向</option>
            <option v-for="(count, c) in (filterOptions?.categories || {})" :key="c" :value="c">{{ c }} ({{ count }})</option>
          </select>
        </div>
        <div class="filter-group">
          <label>细分方向</label>
          <select v-model="subcategory" @change="applyFilter">
            <option value="">全部细分</option>
            <option v-for="(count, s) in (filterOptions?.subcategories || {})" :key="s" :value="s">{{ s }} ({{ count }})</option>
          </select>
        </div>
        <div class="filter-group" v-if="venueOptions.length > 0">
          <label>会议类别</label>
          <select v-model="venue" @change="applyFilter">
            <option value="">全部类别</option>
            <template v-for="opt in venueOptions" :key="opt.value">
              <option v-if="!opt.group" :value="opt.value">{{ opt.label }}</option>
              <option v-else :value="opt.value" style="padding-left:20px">└ {{ opt.label }}</option>
            </template>
          </select>
        </div>
        <div class="filter-group">
          <label>关键词搜索</label>
          <input v-model="search" @input="onSearchInput" placeholder="搜索标题、摘要...">
        </div>
      </div>
      <div class="filters" style="margin-bottom:0">
        <div class="filter-group" style="min-width:120px">
          <label>排序方式</label>
          <select v-model="sortBy" @change="applySort">
            <option value="default">默认顺序</option>
            <option value="venue">按会议类别</option>
            <option value="id">按论文序号</option>
            <option value="title">按标题字母</option>
          </select>
        </div>
      </div>
    </div>

    <div class="result-info">共 {{ total }} 篇，第 {{ page }} / {{ totalPages }} 页</div>

    <div v-if="loading">
      <div v-for="i in 5" :key="i" class="paper-item" style="height:80px">
        <div class="stat-skeleton" style="height:60px;width:100%"></div>
      </div>
    </div>
    <div v-else>
      <router-link v-for="(paper, idx) in papers" :key="paper.id" :to="'/paper/' + encodeURIComponent(paper.id)" class="paper-item" style="text-decoration:none;display:block">
        <div style="display:flex;gap:12px;align-items:flex-start">
          <span style="color:rgba(255,255,255,0.3);font-size:12px;min-width:40px;padding-top:4px">#{{ (page-1)*20 + idx + 1 }}</span>
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
      </router-link>
      <div v-if="papers.length===0 && !loading" class="no-data">没有匹配的论文</div>
    </div>

    <div v-if="totalPages > 1" style="display:flex;align-items:center;justify-content:center;gap:16px;margin-top:24px;flex-wrap:wrap">
      <div class="pagination" style="margin:0">
        <button class="page-btn" :class="{disabled:page<=1}" @click="scrollTopAndGo(page-1)">‹</button>
        <button v-for="p in visiblePages" :key="p" class="page-btn" :class="{active:p===page}" @click="scrollTopAndGo(p)">{{ p }}</button>
        <button class="page-btn" :class="{disabled:page>=totalPages}" @click="scrollTopAndGo(page+1)">›</button>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="color:var(--text-muted);font-size:13px">跳转到</span>
        <input v-model="jumpPage" @keyup.enter="doJumpPage" placeholder="页码" style="width:60px;padding:6px 10px;border:1px solid var(--border-input);border-radius:6px;background:var(--bg-input);color:var(--text-primary);font-size:13px;text-align:center">
        <button class="btn btn-secondary" @click="doJumpPage" style="padding:6px 12px;font-size:13px">确定</button>
      </div>
    </div>
  </div>
</template>
