import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jokes: [],
    display_joke: undefined,
  },
  mutations: {
    update_jokes(state, payload) {
      state.jokes = payload;
    },
    update_display_jokes(state, payload) {
      state.display_joke = payload;
    }
  },
  actions: {
    // axios call function to call update_jokes function
    get_jokes_from_api(store) {
      axios.request({
        url: "https://geek-jokes.sameerkumar.website/api?format=json",
      }).then((response) => {
        store.commit('update_jokes', response);
      }).catch((error) => {
        error;
      });
    }
  },
})
