import Feed from '../pages/Feed'
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Feed }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
