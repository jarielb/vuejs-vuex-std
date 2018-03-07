export default {
  register({ commit }, id) {
    commit('register', id);
  },
  unregister({ commit }, id) {
    commit('unregister', id);
  },
};
