import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import LayoutPage from '@/views/LayoutPage.vue'
import DetailPage from '@/views/DetailPage.vue'
import ArticlePage from '@/views/ArticlePage.vue'
import LikePage from '@/views/LikePage.vue'
import CollectPage from '@/views/CollectPage.vue'
import UserPage from '@/views/UserPage.vue'

Vue.use(VueRouter)

// 路由规则
const routes = [
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/register',
    component: RegisterPage
  },
  {
    path: '/layout',
    component: LayoutPage,
    redirect: '/layout/article',
    children: [
      {
        path: '/layout/article',
        component: ArticlePage
      },
      {
        path: '/layout/like',
        component: LikePage
      },
      {
        path: '/layout/collect',
        component: CollectPage
      },
      {
        path: '/layout/user',
        component: UserPage
      }
    ]
  },
  {
    path: '/article/:id',
    component: DetailPage
  }
]
// 创建路由
const router = new VueRouter({
  routes
})

export default router
