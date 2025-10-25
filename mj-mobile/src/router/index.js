import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import LayoutPage from '@/views/LayoutPage.vue'
import DetailPage from '@/views/DetailPage.vue'

Vue.use(VueRouter)

// 路由规则
const routes = [
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
  { path: '/layout', component: LayoutPage },
  { path: '/article/:id', component: DetailPage }
]
// 创建路由
const router = new VueRouter({
  routes
})

export default router
