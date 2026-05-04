<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { usePapersStore } from '../stores/papers'

const router = useRouter()
const route = useRoute()
const store = usePapersStore()

const expanded = ref(false)
const collapsing = ref(false)
const userMenuOpen = ref(false)
const isDark = ref(true)

onMounted(() => {
  const saved = localStorage.getItem('acl_theme')
  if (saved) {
    isDark.value = saved === 'dark'
    document.documentElement.setAttribute('data-theme', saved)
  }
})

const navItems = [
  { icon: 'home', label: '首页', path: '/' },
  { icon: 'list', label: '论文列表', path: '/papers' },
  { icon: 'cloud', label: '词云分析', path: '/wordcloud' },
  { icon: 'chart', label: '统计图表', path: '/charts' },
]

const toolItems = [
  { icon: 'user', label: '用户中心', path: '/user' },
  { icon: 'clock', label: '历史', path: '/history' },
  { icon: 'star', label: '收藏', path: '/favorites' },
  { icon: 'tool', label: '工具', path: '/tools' },
  { icon: 'message', label: '反馈与建议', path: '/feedback' },
]

function navigateTo(path: string) {
  router.push(path)
  userMenuOpen.value = false
  if (window.innerWidth < 768) expanded.value = false
}

function toggleExpand() {
  if (expanded.value) {
    collapsing.value = true
    expanded.value = false
    userMenuOpen.value = false
    setTimeout(() => { collapsing.value = false }, 350)
  } else {
    expanded.value = true
  }
}

function toggleTheme() {
  isDark.value = !isDark.value
  const theme = isDark.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('acl_theme', theme)
}

function toggleUserMenu() {
  userMenuOpen.value = !userMenuOpen.value
}

function isActive(path: string) {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>

<template>
  <aside class="sidebar" :class="{ expanded, collapsing }" @mouseleave="userMenuOpen = false">
    <!-- Toggle button -->
    <div class="sidebar-toggle-zone" @click="toggleExpand">
      <div class="sidebar-brand">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
        </svg>
        <span class="sidebar-brand-text">Paper Insight</span>
      </div>
      <div class="sidebar-toggle" :class="{ rotated: expanded }">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 3L11 8L6 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="sidebar-nav">
      <div class="nav-group">
        <div
          v-for="item in navItems"
          :key="item.path"
          class="sidebar-item"
          :class="{ active: isActive(item.path) }"
          @click="navigateTo(item.path)"
          :title="!expanded ? item.label : ''"
        >
          <div class="item-indicator"></div>
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
        </div>
      </div>

      <div class="nav-divider"></div>

      <div class="nav-group">
        <div
          v-for="item in toolItems"
          :key="item.path"
          class="sidebar-item"
          :class="{ active: isActive(item.path) }"
          @click="navigateTo(item.path)"
          :title="!expanded ? item.label : ''"
        >
          <div class="item-indicator"></div>
          <div class="item-icon-wrap">
            <svg v-if="item.icon === 'user'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
            <svg v-else-if="item.icon === 'clock'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            <svg v-else-if="item.icon === 'star'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            <svg v-else-if="item.icon === 'tool'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
            </svg>
            <svg v-else-if="item.icon === 'message'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
          </div>
          <span class="item-label">{{ item.label }}</span>
        </div>
      </div>
    </nav>

    <!-- Bottom -->
    <div class="sidebar-bottom">
      <div class="sidebar-item theme-toggle" @click="toggleTheme" :title="!expanded ? (isDark ? '日间模式' : '夜间模式') : ''">
        <div class="item-indicator"></div>
        <div class="item-icon-wrap">
          <svg v-if="isDark" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
          </svg>
        </div>
        <span class="item-label">{{ isDark ? '日间模式' : '夜间模式' }}</span>
      </div>

      <div class="nav-divider"></div>

      <div class="sidebar-item sidebar-user" @click="toggleUserMenu">
        <div class="item-icon-wrap"><div class="user-avatar">U</div></div>
        <span class="item-label user-name-text">用户</span>
      </div>
    </div>

    <!-- User Menu -->
    <Transition name="menu-pop">
      <div v-if="userMenuOpen" class="user-menu" :class="{ 'menu-expanded': expanded }">
        <div class="menu-header">
          <div class="menu-avatar">U</div>
          <div class="menu-user-info">
            <div class="menu-user-name">研究者</div>
            <div class="menu-user-role">Paper Insight</div>
          </div>
        </div>
        <div class="menu-divider"></div>
        <div class="menu-item" @click="navigateTo('/user')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          <span>个人中心</span>
        </div>
        <div class="menu-item" @click="navigateTo('/favorites')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <span>我的收藏</span>
        </div>
        <div class="menu-item" @click="navigateTo('/history')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span>浏览历史</span>
        </div>
        <div class="menu-divider"></div>
        <div class="menu-item" @click="store.loadPapers(); userMenuOpen = false">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/></svg>
          <span>刷新数据</span>
        </div>
      </div>
    </Transition>
  </aside>
</template>
