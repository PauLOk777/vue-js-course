<template>
  <div id="card_details_page">
    <div class="row justify-content-between mb-5 mr-5">
      <logo
        :company_name="company_name"
        :app_name="app_name"
        :style="
          `padding-left:${padding_left_logo}px;margin-left: ${margin_left_logo}px`
        "
      />
      <div class="glyphicon text-right align-self-center">
        <router-link :to="movies_path">
          <span>X</span>
        </router-link>
      </div>
    </div>
    <film-detail-card v-if="card.genres != undefined" :card="card" />
    <div class="result_control">
      <div class="bold_span col-4 text-center">
        <span>{{ films_by }} {{ randomGenre }} {{ by_genre }}</span>
      </div>
    </div>
    <film-gallery :cards="filmsByGenre" />
    <custom-footer :company_name="company_name" :app_name="app_name" />
  </div>
</template>

<script>
import "../assets/cardDetailsPage.css";
import CustomFooter from "./CustomFooter.vue";
import FilmDetailCard from "./FilmDetailCard.vue";
import FilmGallery from "./FilmGallery.vue";
import Logo from "./Logo.vue";
import { I18N, FILTERS, FILM_KEYS, APP_DATA, API } from "../core/constants";
import { STATE_KEYS } from "../core/store";
import ApiService from "../core/api";
import { ROUTES_PATHS } from "../core/router";
export default {
  components: { Logo, FilmDetailCard, FilmGallery, CustomFooter },
  props: {
    id: String
  },
  watch: {
    id: function(newId) {
      this.loadCard(+newId);
    }
  },
  data() {
    return {
      movies_path: ROUTES_PATHS.MOVIES,
      company_name: I18N["EN"].COMPANY_NAME,
      app_name: I18N["EN"].APP_NAME,
      padding_left_logo: 30,
      margin_left_logo: 35,
      films_by: I18N["EN"].FILMS_BY,
      by_genre: I18N["EN"].BY_GENRE,
      filmsByGenre: [],
      card: {},
      randomGenre: ""
    };
  },
  created() {
    this.loadCard(+this.id);
  },
  methods: {
    loadCard(id) {
      const params = {
        [API.KEYS.SORT_BY]: this.$store.state[STATE_KEYS.SORT_OPTION],
        [API.KEYS.SORT_ORDER]: this.$store.state[STATE_KEYS.SORT_ORDER],
        [API.KEYS.SEARCH]: this.randomGenre,
        [API.KEYS.SEARCH_BY]: FILM_KEYS.GENRES,
        [API.KEYS.OFFSET]: 0,
        [API.KEYS.LIMIT]: APP_DATA.CARDS_PER_PAGE
      };

      ApiService.getMovieById(id)
        .then(film => (this.card = film))
        .then(() => {
          this.randomGenre = this.$options.filters[FILTERS.GET_RANDOM_GENRE](
            this.card[FILM_KEYS.GENRES]
          );
        });

      ApiService.getMoviesByParameters(params).then(
        info => (this.filmsByGenre = info.data)
      );
    }
  }
};
</script>
