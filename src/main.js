import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
// import CodeView from 'vue-code-view'
// import CodeView from "vue-code-view";
// let CodeView = require('vue-code-view')
// import "vue-code-view/lib/vue-code-viewer.css";

// Vue.use(CodeView)
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$http = axios;


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
