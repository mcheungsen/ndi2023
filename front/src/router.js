// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import NotFound from './views/404.vue';
// Importez d'autres composants pour vos différentes pages

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  { 
    path: '/:pathMatch(.*)*', 
    name: '404',
    component: NotFound,
 }
  // Ajoutez d'autres routes pour vos différentes pages
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
