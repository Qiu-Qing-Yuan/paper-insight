import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import OverviewPage from './views/OverviewPage.vue'
import PapersPage from './views/PapersPage.vue'
import PaperDetailPage from './views/PaperDetailPage.vue'
import WordcloudPage from './views/WordcloudPage.vue'
import ChartsPage from './views/ChartsPage.vue'
import UserCenterPage from './views/UserCenterPage.vue'
import HistoryPage from './views/HistoryPage.vue'
import FavoritesPage from './views/FavoritesPage.vue'
import ToolsPage from './views/ToolsPage.vue'
import FeedbackPage from './views/FeedbackPage.vue'

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes: [
    { path: '/', component: HomePage },
    { path: '/overview', component: OverviewPage },
    { path: '/papers', component: PapersPage },
    { path: '/paper/:id', component: PaperDetailPage },
    { path: '/wordcloud', component: WordcloudPage },
    { path: '/charts', component: ChartsPage },
    { path: '/user', component: UserCenterPage },
    { path: '/history', component: HistoryPage },
    { path: '/favorites', component: FavoritesPage },
    { path: '/tools', component: ToolsPage },
    { path: '/feedback', component: FeedbackPage },
  ]
})

export default router
