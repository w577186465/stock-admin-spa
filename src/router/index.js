import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import layout from '@/pages/layout'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
// router.beforeEach((to, from, next) => {
// })
export default router
