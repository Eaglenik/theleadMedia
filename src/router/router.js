import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/Main'
import Service from '@/pages/service'
import servicesService from '@/pages/servicesService'
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
    path: '/servicesservice/:slug',
    name: 'servicesService',
    component: servicesService,
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
    meta: {
      showFooterFooter: true,
      hideContactFooter: true
    },
    component: Contact
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound ',
    meta: {
      hideFooter: true
    },
    component: () => import('@/pages/NotFound')
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
  
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})


export default router;