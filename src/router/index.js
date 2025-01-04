import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from '@/components/HomeComponent.vue'; // Ta page d'accueil
import RushXComponent from '@/components/RushXComponent.vue';

const routes = [
  { path: '/', component: HomeComponent }, // Page d'accueil
  { path: '/rushx', component: RushXComponent }, // Page RushX
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
