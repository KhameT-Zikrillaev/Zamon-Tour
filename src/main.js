import './assets/styles/main.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {createI18n} from 'vue-i18n'
import AOS from "aos";
import 'aos/dist/aos.css';
import App from './App.vue'
import router from './router'
import en from '@/lenguage/en.json'
import ru from '@/lenguage/ru.json'
import uz from '@/lenguage/uz.json'
const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
      en: en,
      ru: ru,
      uz: uz,
    }
  })
AOS.init();
app.use(i18n)
app.mount('#app') 

app.use(router)

