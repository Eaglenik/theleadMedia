import app from '../App.vue'
import Project from '../views/project.vue'

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'app',
      component: app
    },
    {
      path: '/project/:id',
      name: 'project',
      component: Project
    }
  ]
})

export default router