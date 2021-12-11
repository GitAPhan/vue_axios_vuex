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
    this.$store.commit('update_display_jokes', this.jokes.__ob__.value.data.joke.toUpperCase());
          // grabbing container to hide option buttons after click
          var option_button_container = document.getElementById('option_button_container');
          option_button_container.style.display = 'none';
      }
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