import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Menu',
    component: () => import('./components/Menu.vue'),
  },
  {
    path: '/monsters',
    name: 'Monsters',
    component: () => import('./components/Monster/MonsterList.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
