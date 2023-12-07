// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import NotFound from './views/404.vue';
import Ecology from './views/Ecology.vue';
import Quiz from './views/Quiz.vue';
import Rythm from './views/Rythm.vue';
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
 ,
  { 
    path: '/quiz', 
    name: 'Quiz',
    component: Quiz,
 }
 ,
  { 
    path: '/ecology', 
    name: 'Ecology',
    component: Ecology,
 }
 ,
  { 
    path: '/rythm', 
    name: 'Rythm',
    component: Rythm,
 }
  // Ajoutez d'autres routes pour vos différentes pages
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
