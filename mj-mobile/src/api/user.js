// 存放与用户相关的axios请求函数
import request from '@/utils/request'

// 注册用户
export const register = (data) => {
  // 发送注册请求
  // 将请求的Promise对象返回
  return request.post('/user/register', data)
}

// 用户登录
export const login = (data) => {
  // 用户登录请求
  return request.post('/user/login', data)
}
