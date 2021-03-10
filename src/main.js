import Vue from 'vue'
import App from './App.vue'
import router from './router'
import http from './network/http'
import store from './store'
import vant, { Toast } from 'vant'
import 'vant/lib/index.css'

Vue.use(vant)

Vue.prototype.$toast = Toast
Vue.prototype.$http = http
Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
