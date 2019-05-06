import Vue from 'vue'
import App from './App'


import https from './utils/https'
Vue.prototype.$http=https
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
