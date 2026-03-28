import { createRouter, createWebHistory } from 'vue-router'
import { birdSlugs } from '@/birds'

const routes = [
  {
    path: '/',
    name: 'bird-list',
    component: () => import('../views/BirdListView.vue')
  },
  {
    path: '/:bird',
    component: () => import('../views/BirdLayout.vue'),
    beforeEnter: (to) => {
      if (!birdSlugs.includes(to.params.bird)) return '/'
    },
    children: [
      {
        path: '',
        name: 'bird-home',
        component: () => import('../views/common-kestrel/HomeView.vue')
      },
      {
        path: 'hatch',
        name: 'bird-hatch',
        component: () => import('../views/common-kestrel/HatchView.vue')
      },
      {
        path: 'growth',
        name: 'bird-growth',
        component: () => import('../views/common-kestrel/GrowthView.vue')
      },
      {
        path: 'flight',
        name: 'bird-flight',
        component: () => import('../views/common-kestrel/FlightView.vue')
      },
      {
        path: 'hunt',
        name: 'bird-hunt',
        component: () => import('../views/common-kestrel/HuntView.vue')
      },
      {
        path: 'mate',
        name: 'bird-mate',
        component: () => import('../views/common-kestrel/MateView.vue')
      },
      {
        path: 'nest',
        name: 'bird-nest',
        component: () => import('../views/common-kestrel/NestView.vue')
      },
      {
        path: 'journey',
        name: 'bird-journey',
        component: () => import('../views/common-kestrel/JourneyView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
