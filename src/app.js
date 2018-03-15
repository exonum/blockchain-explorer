import Vue from 'vue'
import router from './router'
import axios from './plugins/axios'
import Validate from './plugins/validate'
import App from './App.vue'

Vue.use(axios)
Vue.use(Validate)

new Vue({
  el: '#app',
  router,
  render: (createElement) => createElement(App)
})
