import VueRouter from 'vue-router'
import vue from 'vue'

vue.use(VueRouter)
// 基本布局
const baseView = () => import("@/layout/base-view")
// 首页
const index = () => import("@/page/index")
// 师资队伍列表
// const teacherList = () => import("@/page/teacher/index")

const articleIndex = () => import('@/page/article/index')
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
            //     path: '/teachers',
            //     component: teacherList,
            //     children: [
            //         {
            //             path: '/teacher-professor',
            //             component: () => import('@/page/teacher/professor-list')
            //         },
            //
            //
            //     ]
            // },
            {
                path: '/teacher-professor',
                component: () => import('@/page/teacher/professor-list')
            },
            {
                path: '/teacher-associate-professor',
                component: () => import('@/page/teacher/associate-professor')
            },
            {
                path: '/teacher-lecture',
                component: () => import('@/page/teacher/lecture-list')
            },
            {
                path: '/major-intro',
                component: () => import('@/page/major/index')
            },
            {
                path: '/dire-intro',
                component: () => import('@/page/major/direction-introduce')
            },
            {
                path: '/lab-tech',
                component: () => import('@/page/lab/lab-teach')
            },
            {
                path: '/lab-room',
                component: () => import('@/page/lab/lab-room')
            },
            {
                path: '/article',
                component: articleIndex
            },
            {
                path: '/article/:id',
                component: () => import('@/page/article/article-detail')
            },
            {
                path: '/teacher/:id',
                component: () => import('@/page/teacher/teacher-introduce')
            },

            {
                path: '/lab-925',
                component: () => import('@/page/lab/lab-925')
            },
            {
                path: '/notice/:id',
                component: () => import('@/page/notice/notice-detail')
            }
        ]
    }
]

const router = new VueRouter({
    routes
})
export default router;

