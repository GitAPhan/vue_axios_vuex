<template>
  <div>
    <!-- add event click to call make_loud_joke function -->
    <button @click="make_loud_joke">LOUD JOKE</button>
  </div>
</template>

<script>
export default {
  name: "loud-joke",
  methods: {
    make_loud_joke() {
      // function to grab 'jokes' from store and update 'display_jokes'
      this.$store.commit("update_display_jokes", this.jokes.toUpperCase());
      // grabbing container to hide option buttons after click
      this.$store.commit("update_display_option_buttons", false);
    },
  },
  computed: {
    jokes() {
      // grabbing the 'jokes' from the state
      return this.$store.state["jokes"];
    },
  },
};
</script>

<style scoped>
</style>