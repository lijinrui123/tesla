import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import animated from 'animate.css';
import 'animate.css/animate.min.css'

import 'animate.css'
import App from './App.vue'
import router from './router'

import './assets/reset.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
// app.use(animated)

app.mount('#app')
