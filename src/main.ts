import { createApp } from 'vue'
import './style.css'
// @ts-ignore
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons'
import {toLine} from "./util";
import mUi from "./components"

const app = createApp(App)

// 全局注册图标组件，以便后续可以随时取用，当然，这会牺牲一点性能
for (let i in Icons) {
    // 注册全局组件
    app.component(`fu-icon${toLine(i)}`, (Icons as any)[i])
}


app.use(router)
app.use(ElementPlus)
app.use(mUi)

app.mount('#app')
