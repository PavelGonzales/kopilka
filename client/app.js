import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import './../node_modules/normalize.css/normalize.css'
import './../node_modules/vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
