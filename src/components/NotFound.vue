<template>
  <div class="not-found">
    <div class="text-center">
      <img src="@/assets/404.png" alt="404" />
    </div>
    <div class="find-movies-text text-center">
      <router-link :to="movies_path">{{ find_movies }}</router-link>
    </div>
  </div>
</template>

<script>
import "../assets/notFound.css";
import { I18N } from "../core/constants";
import { ROUTES_PATHS } from "../core/router";
export default {
  name: "NotFound",
  data() {
    return {
      find_movies: I18N["EN"].FIND_MOVIES,
      movies_path: ROUTES_PATHS.MOVIES
    };
  }
};
</script>
