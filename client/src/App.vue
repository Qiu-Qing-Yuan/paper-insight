<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { usePapersStore } from './stores/papers'
import AppSidebar from './components/AppSidebar.vue'
import ConferenceBar from './components/ConferenceBar.vue'

const store = usePapersStore()
const loading = computed(() => store.loading)
const progress = computed(() => store.progress)
const externalLoading = computed(() => store.externalLoading)
const externalProgress = computed(() => store.externalProgress)

onMounted(() => {
  store.loadPapers()
  store.loadConferences()
})
</script>

<template>
  <div class="app-layout">
    <AppSidebar />
    <main class="app-main">
      <div class="conf-bar-wrap">
        <ConferenceBar />
      </div>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
  <div v-if="loading" class="global-loading" style="display:flex">
    <div style="text-align:center">
      <div class="loading" style="margin-bottom:16px">{{ progress.message || '正在加载数据...' }}</div>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: progress.percent + '%' }"></div>
      </div>
      <div style="color:#888;font-size:12px;margin-top:8px">{{ progress.percent }}%</div>
    </div>
  </div>
  <Transition name="fade">
    <div v-if="externalLoading && externalProgress.status === 'loading'" class="external-loading-toast">
      <div class="loading-sm">{{ externalProgress.message }}</div>
      <div class="progress-bar" style="height:4px;margin-top:8px">
        <div class="progress-fill" :style="{ width: externalProgress.percent + '%' }"></div>
      </div>
    </div>
  </Transition>
</template>
