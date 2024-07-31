import { App } from 'vue'
// @ts-ignore
import fuChooseTime from './src/index.vue'

export default {
  install(app:App) {
      app.component('fu-choose-time', fuChooseTime)
  }
}
