import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import commonUtilsForMovies from "./plugins/commonUtilsForMovies";

Vue.config.productionTip = false;

Vue.use(commonUtilsForMovies);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
