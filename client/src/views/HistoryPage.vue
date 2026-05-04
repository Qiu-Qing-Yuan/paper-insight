<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { usePapersStore } from '../stores/papers'
import { scholarUrl } from '../utils'

const store = usePapersStore()
const history = ref<any[]>([])

onMounted(() => {
  const ids = JSON.parse(localStorage.getItem('acl_history') || '[]')
  history.value = ids.map((id: string) => store.papers.find(p => p.id === id)).filter(Boolean)
})

function clearHistory() {
  localStorage.removeItem('acl_history')
  localStorage.setItem('acl_history_count', '0')
  history.value = []
}
</script>

<template>
  <div class="main">
    <div class="card">
      <div class="section-header">
        <div class="card-title">浏览历史</div>
        <button class="btn btn-secondary" @click="clearHistory" style="font-size:12px;padding:6px 14px">清空历史</button>
      </div>
      <div v-if="history.length === 0" class="no-data">暂无浏览历史</div>
      <div v-for="paper in history" :key="paper.id" class="paper-item" @click="$router.push('/paper/' + encodeURIComponent(paper.id))">
        <div class="paper-title">{{ paper.title }}</div>
        <div class="paper-meta">
          <span class="venue-badge" :class="store.getVenueClass(paper.venue)">{{ paper.venue }}</span>
          <span class="sub-badge">{{ paper.subcategory }}</span>
          <a :href="scholarUrl(paper.title)" target="_blank" class="scholar-link" @click.stop>Google Scholar</a>
        </div>
      </div>
    </div>
  </div>
</template>
