import { createStore } from 'vuex';

export default createStore({
  state: {
    links: []
  },
  mutations: {
    addLink(state, link) {
      state.links.push(link);
    }
  },
  actions: {
    addLink({ commit }, link) {
      commit('addLink', link);
    }
  },
  getters: {
    links: state => state.links
  }
});
