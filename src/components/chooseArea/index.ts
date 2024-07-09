import { App } from 'vue'
// @ts-ignore
import chooseArea from './src/index.vue'

// 让这个组件可以通过use的方式使用
export default {
    install(Vue:App) {
        Vue.component('fu-choose-area', chooseArea)
    }
}
