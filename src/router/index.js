import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/hatch',
    name: 'hatch',
    component: () => import('../views/HatchView.vue')
  },
  {
    path: '/growth',
    name: 'growth',
    component: () => import('../views/GrowthView.vue')
  },
  {
    path: '/hunt',
    name: 'hunt',
    component: () => import('../views/HuntView.vue')
  },
  {
    path: '/flight',
    name: 'flight',
    component: () => import('../views/FlightView.vue')
  },
  {
    path: '/mate',
    name: 'mate',
    component: () => import('../views/MateView.vue')
  },
  {
    path: '/nest',
    name: 'nest',
    component: () => import('../views/NestView.vue')
  },
  {
    path: '/journey',
    name: 'journey',
    component: () => import('../views/JourneyView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router