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
import { getToken } from '@/utils/storage'

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

// 配置路由前置守卫
// to 去哪里
// from 从哪来
// next()调用放行 or next(路径)拦截跳转
router.beforeEach((to, from, next) => {
  const token = getToken()
  if (token) {
    next()
  } else {
    const whiteList = ['/login', '/register']
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
