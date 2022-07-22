import { createApp } from 'vue'
import App from './App.vue'
import store from './vuex/store'
import './css/master.css'

const app = createApp(App)
app.use(store)
app.mount('#app')