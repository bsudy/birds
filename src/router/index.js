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
        component: () => import('../views/ViewResolver.vue'),
        props: { viewName: 'HomeView' }
      },
      {
        path: 'hatch',
        name: 'bird-hatch',
        component: () => import('../views/ViewResolver.vue'),
        props: { viewName: 'HatchView' }
      },
      {
        path: 'growth',
        name: 'bird-growth',
        component: () => import('../views/ViewResolver.vue'),
        props: { viewName: 'GrowthView' }
      },
      {
        path: 'flight',
        name: 'bird-flight',
        component: () => import('../views/ViewResolver.vue'),
        props: { viewName: 'FlightView' }
      },
      {
        path: 'hunt',
        name: 'bird-hunt',
        component: () => import('../views/ViewResolver.vue'),
        props: { viewName: 'HuntView' }
      },
      {
        path: 'mate',
        name: 'bird-mate',
        component: () => import('../views/ViewResolver.vue'),
        props: { viewName: 'MateView' }
      },
      {
        path: 'nest',
        name: 'bird-nest',
        component: () => import('../views/ViewResolver.vue'),
        props: { viewName: 'NestView' }
      },
      {
        path: 'journey',
        name: 'bird-journey',
        component: () => import('../views/ViewResolver.vue'),
        props: { viewName: 'JourneyView' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
