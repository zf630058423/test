/**
 * 当前选择的菜单
 */
export const menu = {
  state: {
    menu: {
      name: "组件",
      url: "",
      level: "",
    },
  },
  getters: {
    getMenuName(state) {
      return state.menu.name;
    },
  },
  mutations: {
    setMenu(state, payload) {
      state.menu = payload;
    },
  },
  actions: {
    menuVuex({ commit }, data) {
      commit("setMenu", data);
    },
  },
};
