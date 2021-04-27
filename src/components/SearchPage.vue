<template>
  <div id="search_page">
    <custom-header />
    <result-control
      :number_of_movies="numberOfMovies"
      :first_option="realesed_date_text"
      :first_option_value="realesed_date_value"
      :second_option="rating_text"
      :second_option_value="rating_value"
      :options_name="sort_by"
    />
    <film-gallery :cards="cards" />
    <custom-footer :company_name="company_name" :app_name="app_name" />
  </div>
</template>

<script>
import CustomHeader from "./CustomHeader.vue";
import CustomFooter from "./CustomFooter.vue";
import FilmGallery from "./FilmGallery.vue";
import ResultControl from "./ResultControl.vue";
import { I18N, APP_DATA, FILM_KEYS } from "../core/constants";
import { GETTERS_KEYS, STATE_KEYS } from "../core/store";
export default {
  name: "SearchPage",
  components: {
    CustomHeader,
    CustomFooter,
    ResultControl,
    FilmGallery
  },
  data() {
    return {
      realesed_date_text: I18N["EN"].REALEASED_DATE,
      realesed_date_value: FILM_KEYS.REALESE_DATE,
      rating_text: I18N["EN"].RATING,
      rating_value: FILM_KEYS.VOTE_AVERAGE,
      sort_by: APP_DATA.SORT_BY,
      company_name: I18N["EN"].COMPANY_NAME,
      app_name: I18N["EN"].APP_NAME
    };
  },
  computed: {
    cards() {
      return this.$store.getters[GETTERS_KEYS.GET_CARDS_ON_PAGE];
    },
    numberOfMovies() {
      return this.$store.state[STATE_KEYS.FILMS_COUNT];
    }
  }
};
</script>
