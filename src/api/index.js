import axios from "axios";
import { config } from "vue/types/umd";

axios.defaults.baseURL = '';

//请求拦截
axios.interceptors.request.use(config => {
  return config
})

//响应拦截
axios.interceptors.response.use(res => {
  return res
}, err => {
  return Promise.reject(err)
})

export default axios;