import * as types from '../mutation-types'

const state = {
  user: {},
  token: ''
}

const mutations = {
  [types.LOGIN] (state, token) {
    localStorage.token = token
    state.token = token
  },
  [types.LOGOUT] (state) {
    localStorage.removeItem('token')
    localStorage.token = null
  }
}

export default {
  state,
  mutations
}
