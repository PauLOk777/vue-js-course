<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <CinemaLogo msg="Welcome to the Cinema App" />
  </div>
</template>

<script>
import CinemaLogo from "./components/CinemaLogo.vue";

export default {
  name: "App",
  components: {
    CinemaLogo
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
