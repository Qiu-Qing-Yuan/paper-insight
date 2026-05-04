<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { usePapersStore } from '../stores/papers'
import { scholarUrl } from '../utils'

const store = usePapersStore()
const favorites = ref<any[]>([])

onMounted(() => {
  const ids = JSON.parse(localStorage.getItem('acl_favorites') || '[]')
  favorites.value = ids.map((id: string) => store.papers.find(p => p.id === id)).filter(Boolean)
})

function removeFavorite(id: string) {
  favorites.value = favorites.value.filter(p => p.id !== id)
  localStorage.setItem('acl_favorites', JSON.stringify(favorites.value.map(p => p.id)))
  localStorage.setItem('acl_favorites_count', String(favorites.value.length))
}
</script>

<template>
  <div class="main">
    <div class="card">
      <div class="section-header">
        <div class="card-title">我的收藏</div>
        <span style="color:#888;font-size:13px">共 {{ favorites.length }} 篇</span>
      </div>
      <div v-if="favorites.length === 0" class="no-data">暂无收藏论文，点击论文详情中的收藏按钮添加</div>
      <div v-for="paper in favorites" :key="paper.id" class="paper-item" style="display:flex;justify-content:space-between;align-items:center">
        <div style="flex:1;cursor:pointer" @click="$router.push('/paper/' + encodeURIComponent(paper.id))">
          <div class="paper-title">{{ paper.title }}</div>
          <div class="paper-meta">
            <span class="venue-badge" :class="store.getVenueClass(paper.venue)">{{ paper.venue }}</span>
            <span class="sub-badge">{{ paper.subcategory }}</span>
            <a :href="scholarUrl(paper.title)" target="_blank" class="scholar-link" @click.stop>Google Scholar</a>
          </div>
        </div>
        <button class="btn btn-secondary" @click="removeFavorite(paper.id)" style="font-size:11px;padding:4px 10px;margin-left:12px;flex-shrink:0">取消收藏</button>
      </div>
    </div>
  </div>
</template>
