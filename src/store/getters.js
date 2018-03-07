export default {
  unregisteredUsers(state) {
    return state.users.filter((user) => !user.registered);
  },
  registered(state) {
    return state.registered;
  },
  totalRegistered(state) {
    return state.registered.length;
  },
};
