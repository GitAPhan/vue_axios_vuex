<template>
  <div>
    <!-- add event click to call make_snake_joke function -->
    <button @click="make_snake_joke">snake_joke</button>
  </div>
</template>

<script>
export default {
  name: "snake-joke",
  methods: {
    // function to split up words and join with '_'
    make_snake_from_string(string) {
      var split_words = string.split(" ");
      return split_words.join("_");
    },
    // function to grab 'jokes' from store and update 'display_jokes'
    make_snake_joke() {
      this.$store.commit(
        "update_display_jokes",
        this.make_snake_from_string(this.jokes)
      );
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