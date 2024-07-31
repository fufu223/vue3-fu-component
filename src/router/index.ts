import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
// @ts-ignore
import Home from "../views/Home.vue";
// @ts-ignore
import Container from '../components/container/src/index.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Container,
        children: [
            {
                path: '',
                name: 'Home',
                component: Home
            },
            {
                path: 'chooseIcon',
                name: 'ChooseIcon',
                // @ts-ignore
                component: () => import('../views/chooseIcon/index.vue')
            },
            {
                path: 'chooseArea',
                name: 'ChoooseArea',
                // @ts-ignore
                component: () => import('../views/chooseArea/index.vue')
            },
            {
                path: 'trend',
                name: 'Trend',
                // @ts-ignore
                component: () => import('../views/trend/index.vue')
            },
            {
                path: 'notification',
                name: 'Notification',
                // @ts-ignore
                component: () => import('../views/notification/index.vue')
            },
            {
                path: 'progress',
                name: 'Progress',
                // @ts-ignore
                component: () => import('../views/progress/index.vue')
            },
            {
                path: 'menu',
                name: 'Menu',
                // @ts-ignore
                component: () => import('../views/menu/index.vue')
            },
            {
                path: 'chooseTime',
                name: 'ChooseTime',
                // @ts-ignore
                component: () => import('../views/chooseTime/index.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
