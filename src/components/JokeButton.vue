<template>
  <div>
    <!-- add event click to call get_joke_button function to make an axios request-->
    <button @click="get_joke_button">Generate Joke</button>
    <!-- I put this in a container so that I can hide it after click -->
    <div id="option_button_container" v-if="display_option_button == true">
      <loud-joke></loud-joke>
      <normal-joke></normal-joke>
      <snake-joke></snake-joke>
    </div>
  </div>
</template>

<script>
import LoudJoke from "./LoudJoke.vue";
import NormalJoke from "./NormalJoke.vue";
import SnakeJoke from "./SnakeJoke.vue";
export default {
  name: "joke-button",
  methods: {
    get_joke_button() {
      //   call function to get jokes from api
      this.$store.dispatch("get_jokes_from_api");
      // display option_button_container after click
      this.$store.commit("update_display_option_buttons", true);
    },
  },
  components: {
    LoudJoke,
    SnakeJoke,
    NormalJoke,
  },
  computed: {
    // variable to determine IF option_button_container should render
    display_option_button() {
      return this.$store.state["display_option_buttons"];
    },
  },
};
</script>

<style scoped>
#option_button_container {
  display: grid;
  grid-auto-flow: column;
  place-items: center;
  padding: 25px;
}
</style>