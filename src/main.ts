import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import './style.css'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import { createPinia } from 'pinia'
import router from './router'
import LText from '@/components/LText.vue'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)
app.component('LText', LText)
app.use(Antd)
app.mount('#app')
