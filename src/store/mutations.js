export default {
  register(state, payload) {
    const date = new Date();
    const match_user = state.users.find((user) => user.id === payload.id);
    match_user.registered = true;
    const registration = {
      id: payload.id,
      name: match_user.name,
      date: `${date.getMonth()} / ${date.getDay()}`,
    };
    state.registered.push(registration);
  },
  unregister(state, payload) {
    const match_user = state.users.find((user) => user.id === payload.id);
    match_user.registered = false;
    const match_registration = state.registered.find((registration) => registration.id === payload.id);
    state.registered.splice(state.registered.indexOf(match_registration), 1);
  },
};
