import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Menu from '../views/Menu.vue';
import About from '../views/About.vue';
import EnglishClub from '../views/EnglishClub.vue';
import Lectorium from '../views/Lectorium.vue';
import PsychologyClub from '../views/PsychologyClub.vue';
import KidsClub from '../views/KidsClub.vue';

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
  {
    path: '/lectorium',
    name: 'Lectorium',
    component: Lectorium,
  },
  {
    path: '/psychology_club',
    name: 'PsychologyClub',
    component: PsychologyClub,
  },
  {
    path: '/kids_club',
    name: 'KidsClub',
    component: KidsClub,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
