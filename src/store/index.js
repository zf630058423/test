import Vue from "vue";
import Vuex from "vuex";
import { menu } from "./menu";
import { loginUser } from "./loginUser";

Vue.use(Vuex);

const store = new Vuex.Store({
  // getters: {
  //   getMenuName() {
  //     return "组件";
  //   },
  // },
  modules: {
    menu,
    loginUser,
  },
});

export default store;
