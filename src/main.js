import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import navTitle from '@/components/navTitle.vue'

Vue.component('nav-title',navTitle)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
