import Vue from 'vue'
import Router from 'vue-router'
import ShouYe from "@/views/ShouYe.vue";
import XiangQing from "@/views/XiangQing.vue";
import MianJing from "@/views/l2/MianJing.vue";
import ShouCang from "@/views/l2/ShouCang.vue";
import XiHuan from "@/views/l2/XiHuan.vue";
import WoDe from "@/views/l2/WoDe.vue";

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            component: ShouYe,
            redirect: '/article',
            children: [
                {
                    path: '/article',
                    component: MianJing,
                },
                {
                    path: '/collect',
                    component: ShouCang
                },
                {
                    path: '/like',
                    component: XiHuan
                },
                {
                    path: '/user',
                    component: WoDe
                }
            ]
        },
        {
            path: '/detail/:id',
            component: XiangQing
        }
    ]
})

export default router
