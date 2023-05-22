import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/Main'
import Service from '@/pages/service'
import Project from '@/pages/project'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/services/:slug',
    name: 'Service',
    component: Service
  },
  {
    path: '/projects/:slug',
    name: 'Project',
    component: Project
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound ',
    component: () => import('@/pages/NotFound')
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router;