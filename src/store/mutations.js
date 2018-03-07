export default {
  register(state, user_id) {
    const date = new Date();
    const match_user = state.users.find((user) => user.id === user_id);
    match_user.registered = true;
    const registration = {
      user_id,
      name: match_user.name,
      date: `${date.getMonth()} / ${date.getDay()}`,
    };
    state.registered.push(registration);
  },
  unregister(state, payload) {
    const match_user = state.users.find((user) => user.id === payload.user_id);
    match_user.registered = false;
    const match_registration = state.registered.find((registration) => registration.user_id === payload.user_id);
    state.registered.splice(state.registered.indexOf(match_registration), 1);
  },
};
