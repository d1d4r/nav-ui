import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import messages from '@/config/i18nMessage'

import App from './App.vue'
import router from './router'

const i18n = createI18n({
  legacy: false,
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
