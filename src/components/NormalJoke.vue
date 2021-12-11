<template>
  <div>
    <!-- add event click to call make_normal_joke function -->
    <button @click="make_normal_joke">normal joke</button>
  </div>
</template>

<script>
export default {
  name: "normal-joke",
  methods: {
    // function to grab 'jokes' from store and update 'display_jokes' 
      make_normal_joke() {
          this.$store.commit('update_display_jokes', this.jokes.__ob__.value.data.joke);
          // grabbing container to hide option buttons after click
          var option_button_container = document.getElementById('option_button_container');
          option_button_container.style.display = 'none';
      }
  },
  computed: {
    // grabbing the 'jokes' from the state
    jokes() {
      return this.$store.state["jokes"];
    },
  },
};
</script>

<style scoped>
</style>