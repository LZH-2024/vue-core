import axios from 'axios'
import { Toast } from 'vant'

// 官网文档
// 创建实例
const instance = axios.create({
  // 基地址
  baseURL: 'http://interview-api-t.itheima.net/h5/',
  // 响应时间
  timeout: 5000
})

// 自定义配置
// 添加请求拦截器
instance.interceptors.request.use(
  // 发送请求前处理
  config => {
    return config
  },
  // 请求失败处理
  error => {
    return Promise.reject(error)
  })

// 添加响应拦截器
instance.interceptors.response.use(
  // 对响应数据处理
  response => {
    return response
  },
  // 响应错误处理
  error => {
    // 如果有错误响应，提取后台错误信息，提示
    if (error.response) {
      Toast(error.response.data.message)
    }
    return Promise.reject(error)
  }
)

// 导出实例
export default instance
