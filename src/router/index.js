import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import layout from '@/pages/layout'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})

if (window.localStorage.getItem('token')) {
  store.dispatch('login', window.localStorage.getItem('token'))
}

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (store.state.auth.token) {  // 通过vuex state获取当前的token是否存在
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})

export default router
