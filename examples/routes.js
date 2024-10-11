import Home from './pages/Home.vue';
import BounceScroll from './pages/BounceScroll.vue';
import SimplePullToLoadMore from './pages/SimplePullToLoadMore.vue';
import SimplePullToRefresh from './pages/SimplePullToRefresh.vue';
import InfiniteScroll from './pages/InfiniteScroll.vue';

export default {
  '/': Home,
  '/bounce-scroll': BounceScroll,
  '/simple-pullto-loadmore': SimplePullToLoadMore,
  '/simple-pullto-refresh': SimplePullToRefresh,
  '/infinite-scroll': InfiniteScroll
};
