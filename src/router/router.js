import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/Main'
import Service from '@/pages/service'
import Case from '@/pages/case'
import Cases from '@/pages/cases'
import Project from '@/pages/project'
import About from '@/pages/about'
import Contact from '@/pages/contact'

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
    path: '/cases/:slug',
    name: 'Case',
    component: Case
  },
  {
    path: '/cases',
    name: 'Cases',
    component: Cases
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
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