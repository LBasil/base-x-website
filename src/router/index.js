import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from '@/components/HomeComponent.vue';
import RushXComponent from '@/components/RushXComponent.vue';

const routes = [
  { path: '/', component: HomeComponent },
  { path: '/rushx', component: RushXComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
