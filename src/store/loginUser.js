import * as userServe from "../api/user";

export const loginUser = {
  // namespace: true,
  state: {
    user: null,
    loading: false,
  },
  getters: {
    getUserName(state) {
      return state.user.name;
    },
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    async login({ commit }, { loginId, loginPwd }) {
      commit("setLoading", true);
      const user = await userServe.login(loginId, loginPwd);
      commit("setUser", user);
      commit("setLoading", false);
      return user;
    },
    async loginOut({ commit }) {
      commit("setLoading", true);
      await userServe.loginOut();
      commit("setUser", null);
      commit("setLoading", false);
    },
    async whoAmI({ commit }) {
      commit("setLoading", true);
      const user = userServe.whoAmI();
      commit("setUser", user);
      commit("setLoading", false);
    },
  },
};
