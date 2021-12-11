import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // to store axios request
    jokes: undefined,
    // to store joke after being 'processed' but the options
    display_joke: undefined,
    // to determine if the option buttons should show up
    display_option_buttons: false,
  },
  mutations: {
    update_jokes(state, payload) {
      state.jokes = payload;
    },
    update_display_jokes(state, payload) {
      state.display_joke = payload;
    },
    update_display_option_buttons(state, payload) {
      state.display_option_buttons = payload;
    }
  },
  actions: {
    // axios call function to call update_jokes function
    get_jokes_from_api(store) {
      axios.request({
        url: "https://geek-jokes.sameerkumar.website/api?format=json",
      }).then((response) => {
        store.commit('update_jokes', response.data.joke);
      }).catch((error) => {
        error;
      });
    }
  },
})
