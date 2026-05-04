<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { usePapersStore } from './stores/papers'
import AppSidebar from './components/AppSidebar.vue'
import ConferenceBar from './components/ConferenceBar.vue'

const store = usePapersStore()
const loading = computed(() => store.loading)
const externalLoading = computed(() => store.externalLoading)

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
      <div class="loading" style="margin-bottom:16px">正在加载数据...</div>
    </div>
  </div>
  <Transition name="fade">
    <div v-if="externalLoading" class="external-loading-toast">
      <div class="loading-sm">正在加载会议数据...</div>
    </div>
  </Transition>
</template>
