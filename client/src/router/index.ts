import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductViewVue from '@/ProductView.vue'
import ProductDetialsViewVue from '@/views/ProductDetialsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
        path: '/products',
        name: 'products',
        component: ProductViewVue,
    },
    {
        path: '/product/:id',
        name: 'product',
        component: ProductDetialsViewVue,
    },
  ]
})

export default router