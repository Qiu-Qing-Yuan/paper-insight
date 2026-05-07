<script setup lang="ts">
import { ref, computed } from 'vue'
import { usePapersStore } from '../stores/papers'
import { scholarUrl } from '../utils'

const store = usePapersStore()
const searchText = ref('')
const searchResults = ref<any[]>([])
const searchMode = ref<'title' | 'author' | 'abstract'>('title')

function doSearch() {
  const q = searchText.value.toLowerCase().trim()
  if (!q) { searchResults.value = []; return }
  searchResults.value = store.papers.filter(p => {
    if (searchMode.value === 'title') return (p.title || '').toLowerCase().includes(q)
    if (searchMode.value === 'author') return (p.authors || []).some(a => a.toLowerCase().includes(q))
    return (p.abstract_en || '').toLowerCase().includes(q) || (p.abstract_zh || '').toLowerCase().includes(q)
  })
}

const topAuthors = computed(() => {
  const counts: Record<string, number> = {}
  store.papers.forEach(p => (p.authors || []).forEach(a => { counts[a] = (counts[a] || 0) + 1 }))
  return Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 20)
})
</script>

<template>
  <div class="main">
    <div class="card">
      <div class="card-title">高级搜索</div>
      <div style="display:flex;gap:12px;margin-bottom:16px;flex-wrap:wrap">
        <div style="display:flex;gap:4px">
          <button class="btn" :class="searchMode === 'title' ? 'btn-primary' : 'btn-secondary'" @click="searchMode = 'title'; doSearch()" style="font-size:12px;padding:6px 14px">标题</button>
          <button class="btn" :class="searchMode === 'author' ? 'btn-primary' : 'btn-secondary'" @click="searchMode = 'author'; doSearch()" style="font-size:12px;padding:6px 14px">作者</button>
          <button class="btn" :class="searchMode === 'abstract' ? 'btn-primary' : 'btn-secondary'" @click="searchMode = 'abstract'; doSearch()" style="font-size:12px;padding:6px 14px">摘要</button>
        </div>
        <input v-model="searchText" @input="doSearch" placeholder="输入关键词..." style="flex:1;padding:8px 14px;border:1px solid #404040;border-radius:10px;background:#1e1e1e;color:#e5e5e5;font-size:13px">
      </div>
      <div v-if="searchResults.length > 0" style="color:#888;font-size:13px;margin-bottom:12px">找到 {{ searchResults.length }} 篇论文</div>
      <div v-for="paper in searchResults.slice(0, 50)" :key="paper.id" class="paper-item" @click="$router.push('/paper/' + encodeURIComponent(paper.id))">
        <div class="paper-title">{{ paper.title }}</div>
        <div class="paper-meta">
          <span class="venue-badge" :class="store.getVenueClass(paper.venue)">{{ store.getVenueLabel(paper.venue) }}</span>
          <span class="sub-badge">{{ paper.subcategory }}</span>
          <span class="paper-authors">{{ (paper.authors||[]).slice(0,3).join(', ') }}</span>
        </div>
      </div>
      <div v-if="searchText && searchResults.length === 0" class="no-data">未找到匹配的论文</div>
    </div>

    <div class="card">
      <div class="card-title">高产作者 Top 20</div>
      <ol class="rank-list">
        <li v-for="(item, i) in topAuthors" :key="item[0]" class="rank-item">
          <span class="rank-num" :class="{ top3: i < 3 }">{{ i + 1 }}</span>
          <span class="rank-name">{{ item[0] }}</span>
          <span class="rank-count">{{ item[1] }} 篇</span>
        </li>
      </ol>
    </div>
  </div>
</template>
