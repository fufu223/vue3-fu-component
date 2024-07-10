import { App } from 'vue'
import chooseArea from "./chooseArea"
import chooseIcon from "./chooseIcon"
import trend from "./trend"

const components = [
    chooseArea,
    chooseIcon,
    trend
]

export default {
    // 插件通过app.use(YourPlugin)被添加到应用中时，install方法会被调用。
    install(Vue: App) {
        components.map(component => {
            Vue.use(component)
        })
    }
}
