import $bigInt from 'big-integer'

export default {
  install(Vue) {
    Vue.prototype.$bigInt = $bigInt
  }
}
