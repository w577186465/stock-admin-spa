import * as types from './mutation-types'

export const login = ({ commit }, token) => {
  commit(types.LOGIN, token)
}

export const logout = ({ commit }, token) => {
  commit(types.LOGOUT)
}
