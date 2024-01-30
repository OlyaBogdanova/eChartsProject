import { createRouter, createWebHistory } from 'vue-router'
import GraficPage from '../views/GraficPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'graficPage',
      component: GraficPage
    }
  ]
})

export default router
