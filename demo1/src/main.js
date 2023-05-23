import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from "./router/index"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(ElementUI);
Vue.use(VueRouter)
Vue.use(VueResource)

new Vue({
  el:"#app",
  router:router,
  render: h=>h(App)
  
}).$mount('#app')
