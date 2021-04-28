import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import commonUtilsForMovies from "./plugins/commonUtilsForMovies";
import ApiService from "./core/api";

Vue.config.productionTip = false;

Vue.use(commonUtilsForMovies);
ApiService.init();

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
