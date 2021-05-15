<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import "./assets/app.css";
import { APP_DATA } from "./core/constants";
import { ACTION_KEYS } from "./core/store";

export default {
  name: "App",

  mounted() {
    this.$store.dispatch(ACTION_KEYS.LOAD_MOVIES, APP_DATA.CARDS_PER_PAGE);
  }
};
</script>
