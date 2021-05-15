import Vue from "vue";
import VueRouter from "vue-router";
import SearchPage from "../components/SearchPage";
import CardDetailsPage from "../components/CardDetailsPage";
import NotFound from "../components/NotFound";
import { ROUTES_PATHS, ROUTES_NAMES } from "../core/router";

Vue.use(VueRouter);

const routes = [
  {
    path: ROUTES_PATHS.MOVIES,
    name: ROUTES_NAMES.MOVIES,
    component: SearchPage
  },
  {
    path: ROUTES_PATHS.MOVIE_BY_ID,
    name: ROUTES_NAMES.MOVIE_BY_ID,
    component: CardDetailsPage,
    props: true
  },
  {
    path: ROUTES_PATHS.ALL_ROUTES,
    name: ROUTES_NAMES.NOT_FOUND,
    component: NotFound
  }
];

export default new VueRouter({
  mode: "history",
  routes,
  base : process.env.NODE_ENV === "production" ? "/vue-js-course/" : "/"
});
