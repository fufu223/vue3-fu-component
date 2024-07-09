import { App } from 'vue'
// @ts-ignore
import chooseIcon from './src/index.vue'

// 让这个组件可以通过use的方式使用
export default {
    install(Vue) {
        Vue.component('fu-choose-icon', chooseIcon)
    }
}
