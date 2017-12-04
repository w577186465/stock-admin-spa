import axios from 'axios'
import store from '@/store'
import router from './router'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (store.state.auth.token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = `Bearer ${store.state.auth.token}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          store.dispatch('logout')
          router.replace({
            path: 'login'
          })
      }
    }
    return Promise.reject(error.response.data) // 返回接口返回的错误信息
  })

export default axios
