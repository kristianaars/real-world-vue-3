import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'nprogress/nprogress.css'
import GStore from './store'

createApp(App)
  .use(router)
  .provide('GStore', GStore)
  .mount('#app')
