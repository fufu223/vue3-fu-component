import { App } from 'vue'
// @ts-ignore
// 两层菜单
import menu from './src/index.vue'
// 无限层级菜单
import infiniteMenu from './src/menu'

// 让这个组件可以通过use的方式使用
export default {
    install(app:App) {
        app.component('fu-menu', menu)
        app.component('fu-infinite-menu', infiniteMenu)
    }
}
