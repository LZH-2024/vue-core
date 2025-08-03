import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive("focus", {
  // 指令所在dom被插入页面时触发
  inserted(el) {
    el.focus()
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
