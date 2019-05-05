import Vue from 'vue'
import App from './App'
// import wx from 'weixin-js-sdk'

// console.log(wx)
import animate from 'animate.css'
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
