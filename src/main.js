import Vue from 'vue'
import App from './App.vue'
// 
import router from './router/router'
import store from './store'

// 引入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from "axios"
axios.defaults.baseURL = 'https://127.0.0.1:9000';
Vue.prototype.axios = axios


// 使用
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

