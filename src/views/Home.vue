<template>
  <div id="app">
    <div class="home">
      <h1>{{ message }}</h1>
      <img src="src/assets/bluenote.png" alt="StickyNote" />
    </div>
  </div>
</template>

<style>
.home {
  margin-top: 10%;
}
</style>

<script>
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
    };
  },
  created: function () {
    console.log(this.message);
  },
  methods: {},
};
</script>
