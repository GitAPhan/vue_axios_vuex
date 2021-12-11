<template>
  <div>
    <h1>Would you like to hear a joke?</h1>
    <joke-button></joke-button>
    <!-- joke to be displayed here, using variable 'display_joke' from state -->
    <p>{{ display_joke }}</p>
  </div>
</template>

<script>
import JokeButton from "./JokeButton.vue";
export default {
  name: "home-content",
  components: {
    JokeButton,
  },
  computed: {
    display_joke() {
      return this.$store.state["display_joke"];
    },
  },
};
</script>

<style scoped>
</style>
