import Vue from 'vue';
import Router from 'vue-router';
import ListContainer from '@/components/list-container';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListContainer',
      component: ListContainer,
    },
  ],
});
