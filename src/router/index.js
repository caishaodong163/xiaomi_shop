import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home.vue'
import Index from '../pages/index.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
  redirect: '/index',
  children: [{
    path: '/index',
    name: 'index',
    component: Index
  }]
}]

const router = new VueRouter({
  routes
})

export default router
