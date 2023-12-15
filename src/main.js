import Vue from 'vue'
import App from './App.vue'
import CodeView from "@dreayoung/vue-code-view";
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
// import { File, Preview, Repl, ReplStore } from "vue-code-view";

Vue.use(CodeView);
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$http = axios;


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
