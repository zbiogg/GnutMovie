// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import icons from "v-svg-icons";
import "./assets/css/style.css"
import api from './services/api.js'
Vue.prototype.$http = api;
Vue.config.productionTip = false
Vue.component("icon", icons);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
