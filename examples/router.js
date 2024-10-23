import { createWebHistory, createRouter } from 'vue-router'

import Home from './pages/Home.vue';
import BounceScroll from './pages/BounceScroll.vue';
import SimplePullToLoadMore from './pages/SimplePullToLoadMore.vue';
import SimplePullToRefresh from './pages/SimplePullToRefresh.vue';
import InfiniteScroll from './pages/InfiniteScroll.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/bounce-scroll', component: BounceScroll },
  { path: '/simple-pullto-loadmore', component: SimplePullToLoadMore },
  { path: '/simple-pullto-refresh', component: SimplePullToRefresh },
  { path: '/infinite-scroll', component: InfiniteScroll },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
