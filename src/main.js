import Vue from 'vue';
import Element from 'element-ui';
import App from './App.vue';

// 插件
import '@/utils/extends';
import elExtends from '@/utils/elExtends';
// 样式
import '@/assets/style/reset.less';
import 'element-ui/lib/theme-chalk/index.css';

import router from './router';

Vue.config.productionTip = false;

Vue.use(Element);
Vue.use(elExtends);

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
