import { createApp } from 'vue'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import { BootstrapVue3 } from 'bootstrap-vue-3'
import router from '@/router/router'

const app = createApp(App)

app
    .use(router)
    .use(BootstrapVue3)
    .mount('#app')

