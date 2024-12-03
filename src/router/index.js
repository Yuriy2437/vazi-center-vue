import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Menu from '../views/Menu.vue';
import About from '../views/About.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },

  // Добавьте другие маршруты по необходимости
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
