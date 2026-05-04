<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { usePapersStore } from '../stores/papers'
import { usePaperFilter } from '../composables/usePaperFilter'
import { usePagination } from '../composables/usePagination'
import { scholarUrl } from '../utils'

const store = usePapersStore()
const route = useRoute()
const { filter, sortedCategories, sortedSubcategories, filtered, resetFilter } = usePaperFilter()

const sortBy = ref('default')
const pageSize = 20

const sorted = computed(() => {
  const arr = [...filtered.value]
  if (sortBy.value === 'venue') arr.sort((a, b) => (a.venue || '').localeCompare(b.venue || ''))
  else if (sortBy.value === 'id') arr.sort((a, b) => (a.id || '').localeCompare(b.id || ''))
  else if (sortBy.value === 'title') arr.sort((a, b) => (a.title || '').localeCompare(b.title || ''))
  return arr
})

const { page, jumpPage, totalPages, pagePapers, visiblePages, goToJumpPage, scrollTop, resetPage } = usePagination(sorted, pageSize)

function applyFilter() { resetPage() }
function applySort() { resetPage() }
function handleReset() {
  resetFilter()
  sortBy.value = 'default'
  resetPage()
}

onMounted(() => {
  if (route.query.sub) filter.subcategory = route.query.sub as string
  if (route.query.search) filter.search = route.query.search as string
})
</script>

<template>
  <div class="main">
    <div class="card">
      <div class="section-header">
        <div class="card-title">筛选条件</div>
        <div class="header-actions">
          <button class="btn btn-secondary btn-sm" @click="handleReset">重置</button>
          <button class="btn btn-primary btn-sm" @click="store.loadPapers()">刷新数据</button>
        </div>
      </div>
      <div class="filters">
        <div class="filter-group">
          <label>一级方向</label>
          <select v-model="filter.category" @change="applyFilter">
            <option value="">全部方向</option>
            <option v-for="c in sortedCategories" :key="c" :value="c">{{ c }} ({{ store.categories[c] }})</option>
          </select>
        </div>
        <div class="filter-group">
          <label>细分方向</label>
          <select v-model="filter.subcategory" @change="applyFilter">
            <option value="">全部细分</option>
            <option v-for="s in sortedSubcategories" :key="s" :value="s">{{ s }} ({{ store.subcategories[s] }})</option>
          </select>
        </div>
        <div class="filter-group">
          <label>会议类别</label>
          <select v-model="filter.venue" @change="applyFilter">
            <option value="">全部类别</option>
            <option value="主会">主会</option>
            <option value="Findings">Findings</option>
            <option value="Workshop">Workshop</option>
          </select>
        </div>
        <div class="filter-group">
          <label>关键词搜索</label>
          <input v-model="filter.search" @input="applyFilter" placeholder="搜索标题、摘要...">
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

    <div class="result-info">共 {{ sorted.length }} 篇，第 {{ page }} / {{ totalPages }} 页</div>

    <div v-if="store.loading">
      <div v-for="i in 5" :key="i" class="paper-item" style="height:80px">
        <div class="stat-skeleton" style="height:60px;width:100%"></div>
      </div>
    </div>
    <div v-else>
      <router-link v-for="(paper, idx) in pagePapers" :key="paper.id" :to="'/paper/' + encodeURIComponent(paper.id)" class="paper-item" style="text-decoration:none;display:block">
        <div style="display:flex;gap:12px;align-items:flex-start">
          <span style="color:rgba(255,255,255,0.3);font-size:12px;min-width:40px;padding-top:4px">#{{ (page-1)*pageSize + idx + 1 }}</span>
          <div style="flex:1">
            <div class="paper-title">{{ paper.title }}</div>
            <div class="paper-meta">
              <span class="venue-badge" :class="store.getVenueClass(paper.venue)">{{ paper.venue }}</span>
              <span class="sub-badge">{{ paper.subcategory }}</span>
              <a :href="scholarUrl(paper.title)" target="_blank" class="scholar-link" @click.stop>Google Scholar</a>
              <span class="paper-authors">{{ (paper.authors||[]).slice(0,3).join(', ') }}</span>
            </div>
          </div>
        </div>
      </router-link>
      <div v-if="pagePapers.length===0 && !store.loading" class="no-data">没有匹配的论文</div>
    </div>

    <div v-if="totalPages > 1" style="display:flex;align-items:center;justify-content:center;gap:16px;margin-top:24px;flex-wrap:wrap">
      <div class="pagination" style="margin:0">
        <button class="page-btn" :class="{disabled:page<=1}" @click="page--;scrollTop()">‹</button>
        <button v-for="p in visiblePages" :key="p" class="page-btn" :class="{active:p===page}" @click="page=p;scrollTop()">{{ p }}</button>
        <button class="page-btn" :class="{disabled:page>=totalPages}" @click="page++;scrollTop()">›</button>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="color:rgba(255,255,255,0.5);font-size:13px">跳转到</span>
        <input v-model="jumpPage" @keyup.enter="goToJumpPage" placeholder="页码" style="width:60px;padding:6px 10px;border:1px solid rgba(255,255,255,0.12);border-radius:6px;background:rgba(255,255,255,0.06);color:#fff;font-size:13px;text-align:center">
        <button class="btn btn-secondary" @click="goToJumpPage" style="padding:6px 12px;font-size:13px">确定</button>
      </div>
    </div>
  </div>
</template>
