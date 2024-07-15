import { App } from 'vue'
// @ts-ignore
import list from './src/index.vue'

// 让这个组件可以通过use的方式使用
export default {
    install(app:App) {
        app.component('fu-list', list)
    }
}
