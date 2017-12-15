import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

// 模版
import login from '@/views/login'
import layout from '@/views/layout'
import modules from '@/views/modules'
import reports from '@/views/reports'
import industrys from '@/views/reports/industrys' // 行业研报
import stock from '@/views/reports/stock' // 个股研报

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout,
      meta: {
        requireAuth: true,
        title: '首页'
      },
      children: [
        {
          path: 'modules',
          components: {
            main: modules
          },
          meta: {
            title: '数据模块'
          }
        },
        {
          path: 'reports',
          redirect: 'reports/industrys',
          components: {
            main: reports
          },
          meta: {
            title: '报表'
          },
          children: [
            {
              path: 'industrys',
              components: {
                list: industrys
              },
              meta: {
                title: '行业报表'
              }
            },
            {
              path: 'stock',
              components: {
                list: stock
              },
              meta: {
                title: '个股报表'
              }
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        cannotlogin: true
      }
    }
  ]
})

if (window.localStorage.getItem('token')) {
  store.dispatch('login', window.localStorage.getItem('token'))
}

router.beforeEach((to, from, next) => {
  // 登录后禁止访问
  if (to.meta.cannotlogin) {
    if (store.getters.accessToken) {
      next('/')
    }
  }
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (store.getters.accessToken) {  // 通过vuex state获取当前的token是否存在
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
