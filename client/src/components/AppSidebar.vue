<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { usePapersStore } from '../stores/papers'

const router = useRouter()
const route = useRoute()
const store = usePapersStore()

const expanded = ref(false)
const userMenuOpen = ref(false)
const isDark = ref(true)

onMounted(() => {
  const saved = localStorage.getItem('acl_theme')
  if (saved) {
    isDark.value = saved === 'dark'
    document.documentElement.setAttribute('data-theme', saved)
  }
  document.addEventListener('click', onDocClick)
})

onUnmounted(() => {
  document.removeEventListener('click', onDocClick)
})

function onDocClick(e: MouseEvent) {
  const target = e.target as HTMLElement
  if (!target.closest('.sidebar-user') && !target.closest('.user-menu')) {
    userMenuOpen.value = false
  }
}

const navItems = [
  { icon: 'home', label: '首页', path: '/' },
  { icon: 'list', label: '论文列表', path: '/papers' },
  { icon: 'cloud', label: '词云分析', path: '/wordcloud' },
  { icon: 'chart', label: '统计图表', path: '/charts' },
]

const toolItems = [
  { icon: 'user', label: '用户中心', path: '/user' },
  { icon: 'star', label: '收藏', path: '/favorites' },
  { icon: 'clock', label: '历史', path: '/history' },
  { icon: 'message', label: '反馈', path: '/feedback' },
]

function navigateTo(path: string) {
  router.push(path)
  userMenuOpen.value = false
}

function toggleTheme() {
  isDark.value = !isDark.value
  const theme = isDark.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('acl_theme', theme)
}

function isActive(path: string) {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>

<template>
  <aside class="sidebar" :class="{ expanded }">
    <!-- Top: Brand -->
    <div class="sidebar-header">
      <div class="item-icon-wrap">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
        </svg>
      </div>
      <span class="item-label sidebar-brand-text">Paper Insight</span>
      <!-- Collapse button (top right, only when expanded) -->
      <div class="sidebar-toggle" @click="expanded = false" v-if="expanded" title="收起侧边栏">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="sidebar-nav">
      <div class="nav-group">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="sidebar-item"
          :class="{ active: isActive(item.path) }"
          :title="item.label"
        >
          <div class="item-icon-wrap">
            <svg v-if="item.icon === 'home'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            <svg v-else-if="item.icon === 'list'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
            </svg>
            <svg v-else-if="item.icon === 'cloud'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/>
            </svg>
            <svg v-else-if="item.icon === 'chart'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
            </svg>
          </div>
          <span class="item-label">{{ item.label }}</span>
        </router-link>
      </div>

      <div class="nav-divider"></div>

      <div class="nav-group">
        <router-link
          v-for="item in toolItems"
          :key="item.path"
          :to="item.path"
          class="sidebar-item"
          :class="{ active: isActive(item.path) }"
          :title="item.label"
        >
          <div class="item-icon-wrap">
            <svg v-if="item.icon === 'user'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
            <svg v-else-if="item.icon === 'star'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            <svg v-else-if="item.icon === 'clock'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            <svg v-else-if="item.icon === 'message'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
          </div>
          <span class="item-label">{{ item.label }}</span>
        </router-link>
      </div>
    </nav>

    <!-- Bottom -->
    <div class="sidebar-bottom">
      <!-- Expand button (above theme toggle, only when collapsed) -->
      <div class="sidebar-item" @click="expanded = true" v-if="!expanded" title="展开侧边栏">
        <div class="item-icon-wrap">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </div>
        <span class="item-label">展开</span>
      </div>

      <div class="sidebar-item" @click="toggleTheme" :title="isDark ? '切换到日间模式' : '切换到夜间模式'">
        <div class="item-icon-wrap">
          <svg v-if="isDark" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
          </svg>
        </div>
        <span class="item-label">{{ isDark ? '日间模式' : '夜间模式' }}</span>
      </div>

      <div class="sidebar-item sidebar-user" @click="userMenuOpen = !userMenuOpen" title="用户菜单">
        <div class="item-icon-wrap"><div class="user-avatar">U</div></div>
        <span class="item-label">用户</span>
      </div>
    </div>

    <!-- User Menu -->
    <Teleport to="body">
      <Transition name="menu-pop">
        <div v-if="userMenuOpen" class="user-menu" :class="{ 'menu-expanded': expanded }">
          <div class="menu-item" @click="navigateTo('/user')">个人中心</div>
          <div class="menu-item" @click="navigateTo('/favorites')">我的收藏</div>
          <div class="menu-item" @click="navigateTo('/history')">浏览历史</div>
          <div class="menu-divider"></div>
          <div class="menu-item" @click="store.loadPapers(); userMenuOpen = false">刷新数据</div>
        </div>
      </Transition>
    </Teleport>
  </aside>
</template>
