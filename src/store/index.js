import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    registered: [],
    users: [
      {
        id: 1,
        name: 'Max',
        registered: false,
      },
      {
        id: 2,
        name: 'Anna',
        registered: false,
      },
      {
        id: 3,
        name: 'Chris',
        registered: false,
      },
      {
        id: 4,
        name: 'Sven',
        registered: false,
      },
    ],
  },
  getters,
  mutations,
  actions,
});
