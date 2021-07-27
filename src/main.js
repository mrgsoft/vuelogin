import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

import '@/assets/css/style.css'
import './registerServiceWorker'

import GoogleAuth from '@/config/google_oAuth.js'
const gauthOption = {
  clientId: '520503566181-9h7svbc8fp4fhnkmtdln0hnjq1626bje.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GoogleAuth, gauthOption)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')