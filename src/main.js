import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '../styles/custom.scss'
import './font-awesome'
import router from './routes'
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(VueAxios, axios)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue)

axios.defaults.headers.get['x-rapidapi-key'] = '7492555a3fmshd66969863c4bc3ep198511jsn909d860583e8'

Vue.config.productionTip = false

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
