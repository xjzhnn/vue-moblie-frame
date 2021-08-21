import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import navTitle from '@/components/navTitle.vue'

import {
	Button
} from 'element-ui';
import axios from 'axios'

Vue.use(Button)
Vue.component('nav-title', navTitle)

Vue.config.productionTip = false
Vue.prototype.$axios = axios

import Mock from 'mockjs';
Mock.mock('/login', {
	'name': '张三'
});
new Vue({
	router,
	store,
	render: h => h(App),
	mounted() {
		document.dispatchEvent(new Event('render-event'))
	}
}).$mount('#app')
