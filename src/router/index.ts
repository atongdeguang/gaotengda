import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/Home.vue'
import Login from '@/views/login/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        isLogin: true
      }
      // redirect:
    },
    {
      path: '/login',
      name: 'login',
      component: Login
      // component: () => import('@/views/login/Login.vue')
    },
    {
      redirect: '/login'
    }
  ]
})




export default router

