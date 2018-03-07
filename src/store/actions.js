export default {
  register({ commit }, user_id) {
    setTimeout(() => {
      commit('register', user_id);
    }, 200);
  },
};
