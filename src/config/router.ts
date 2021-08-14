import HomePage from '../pages/Home.vue';
import * as VueRouter from 'vue-router';

const routes = [
  { path: '/', component: HomePage }
]

export default VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})