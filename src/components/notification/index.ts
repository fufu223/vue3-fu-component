import { App } from 'vue'
// @ts-ignore
import notification from './src/index.vue'

// 让这个组件可以通过use的方式使用
export default {
    install(app:App) {
        app.component('fu-nofication', notification)
    }
}
