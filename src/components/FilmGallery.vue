<template>
  <div class="film_gallery position-relative">
    <div v-if="!cards || !cards.length" class="no_results_text">
      <span>{{ no_films }}</span>
    </div>
    <div v-else>
      <div class="container">
        <div class="row">
          <div class="col-md-4" v-for="card in cards" :key="card.title">
            <film-card class="mb-4" :card="card" />
          </div>
        </div>
      </div>
      <div class="load_more text-center">
        <load-more-button
          v-if="!pageIsFullyLoaded"
          @[loadMoreEvent]="loadMore"
          :text="loadMoreText"
        />
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/filmGallery.css";
import FilmCard from "./FilmCard.vue";
import LoadMoreButton from "./LoadMoreButton.vue";
import { PROGRAM_DATA, APP_DATA, I18N } from "../core/constants";
import { STATE_KEYS, GETTERS_KEYS, MUTATIONS_KEYS } from "../core/store";
export default {
  name: "FilmGallery",
  components: { FilmCard, LoadMoreButton },
  props: {
    cards: { type: Array }
  },
  data() {
    return {
      no_films: I18N["EN"].NO_FILMS,
      loadMoreEvent: PROGRAM_DATA.EVENTS.LOAD_MORE
    };
  },
  created() {
    this.$store.commit(
      MUTATIONS_KEYS.SET_NUMBER_OF_CARDS_ON_PAGE,
      APP_DATA.CARDS_PER_PAGE
    );
    this.$store.commit(MUTATIONS_KEYS.SET_SEARCH_FILMS, []);
  },
  methods: {
    loadMore: function() {
      let numberOfCardsOnPage =
        this.$store.state[STATE_KEYS.NUMBER_OF_CARDS_ON_PAGE] +
        APP_DATA.CARDS_PER_PAGE;
      numberOfCardsOnPage = Math.min(
        numberOfCardsOnPage,
        this.$store.getters[GETTERS_KEYS.FILMS_COUNT]
      );

      this.$store.commit(
        MUTATIONS_KEYS.SET_NUMBER_OF_CARDS_ON_PAGE,
        numberOfCardsOnPage
      );
    }
  },
  computed: {
    pageIsFullyLoaded() {
      return this.$store.getters[GETTERS_KEYS.PAGE_IS_FULLY_LOADED];
    },
    loadMoreText() {
      return I18N.EN.LOAD_MORE;
    }
  }
};
</script>
