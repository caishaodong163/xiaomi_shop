import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import Element from 'element-ui'

import '@/styles/index.scss' // 全局样式

import Cookies from 'js-cookie'

import * as filters from './filters' // 全局过滤
Object.keys(filters).forEach(key => { Vue.filter(key, filters[key]) }) // 全局过滤

Vue.use(Element, { size: Cookies.get('size') || 'medium' }) // 设置element-ui默认大小
// Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
