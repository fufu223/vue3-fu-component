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
                path: '/',
                name: 'Home',
                component: Home
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
