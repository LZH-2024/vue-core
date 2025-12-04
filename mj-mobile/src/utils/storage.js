const KEY = 'vant-mobile-exp-user-token'

// 获取用户token
export const getToken = () => {
  return localStorage.getItem(KEY)
}
// 设定用户token
export const setToken = (newToken) => {
  localStorage.setItem(KEY, newToken)
}
// 删除用户token
export const delToken = () => {
  localStorage.removeItem(KEY)
}
