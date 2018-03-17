import Vue from 'vue'
import router from './router'
import axios from './plugins/axios'
import bigInt from './plugins/bigInt'
import moment from './plugins/moment'
import Validate from './plugins/validate'
import App from './App.vue'

Vue.use(axios)
Vue.use(bigInt)
Vue.use(moment)
Vue.use(Validate)

new Vue({
  el: '#app',
  router,
  render: (createElement) => createElement(App)
})
