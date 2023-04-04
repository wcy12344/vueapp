import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Button } from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import 'normalize.css'
import '@/assets/main.css'
import 'ant-design-vue/dist/antd.css'
import 'animate.css'

const app = createApp(App)
// eslint-disable-next-line no-console
console.log('%c不要太暴躁😀😀', 'color: yellow')
app.use(createPinia())
app.use(router)
app.use(Button)
app.mount('#app')
