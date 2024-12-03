import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Menu from '../views/Menu.vue';
import About from '../views/About.vue';
import EnglishClub from '../views/EnglishClub.vue';

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
  {
    path: '/english_club',
    name: 'EnglishClub',
    component: EnglishClub,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
