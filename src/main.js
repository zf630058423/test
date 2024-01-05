import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';


Vue.use(ElementUI)

Vue.directive('highlight', function (el) {
  const blocks = el.querySelectorAll('pre code');
  blocks.forEach(block => {
    hljs.highlightBlock(block)
  });
})

Vue.config.productionTip = false
Vue.prototype.$http = axios;


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
