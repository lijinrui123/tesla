import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import 'animate.css/animate.min.css'
import 'animate.css'
import App from './App.vue'
import router from './router'

import './assets/reset.css'
const store = createPinia()
const app = createApp(App)

app.use(store)
app.use(router)
app.use(ElementPlus)

// router.beforeEach((to, from, next) => {    // 全局路由守卫
//     console.log(to);
//     console.log(store.state._rawValue.accountStore.useAccount);
//     if(store.state._rawValue.accountStore.useAccount){   // 未登陆
//         next()
//     }
    
// })

app.mount('#app')
