import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'accueil', component: HomeView },
    { path: '/projets', name: 'projets', component: () => import('./views/ProjectsView.vue') },
    { path: '/cv', name: 'cv', component: () => import('./views/CvView.vue') },
  ],
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, top: 90 }
    return { top: 0 }
  },
})

export default router
