import VueRouter from 'vue-router'
import vue from 'vue'

vue.use(VueRouter)
// 基本布局
const baseView = () => import("@/layout/base-view")
// 首页
const index = () => import("@/page/index")

export const routes = [
    {
        path: '',
        component: baseView,
        redirect: '/index',
        children: [
            {
                path: "/index",
                component: index
            },
            // {
            //     path: '/subject',
            //
            //     children: [
            //         {
            //             path: '/subject-introduce'
            //         },
            //         {
            //
            //         }
            //     ]
            // }
        ]
    }
]

const router = new VueRouter({
    routes
})
export default router;

