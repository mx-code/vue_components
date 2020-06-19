import Vue from 'vue';
import Router from 'vue-router';

import demo from './children/demo';

const routeTem = () => import('@/components/routeTem');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: routeTem,
      children: [ demo ]
    }
  ]
});
