<template>
  <div class="film_gallery position-relative">
    <div v-if="!cards || !cards.length" class="no_results_text">
      <span>{{ no_films }}</span>
    </div>
    <div v-else>
      <div class="container">
        <div class="row">
          <div class="col-md-4" v-for="card in cards" :key="card.title">
            <router-link :to="createLinkForCard(card.id)">
              <film-card class="mb-4" :card="card" />
            </router-link>
          </div>
        </div>
      </div>
      <div class="load_more text-center">
        <load-more-button
          v-if="!pageIsFullyLoaded && !isCardDetailsPage"
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
import { PROGRAM_DATA, I18N } from "../core/constants";
import { STATE_KEYS, ACTION_KEYS } from "../core/store";
import { ROUTES_PATHS, ROUTES_NAMES } from "../core/router";
export default {
  name: "FilmGallery",
  components: { FilmCard, LoadMoreButton },
  props: {
    cards: { type: Array }
  },
  data() {
    return {
      no_films: I18N["EN"].NO_FILMS,
      loadMoreEvent: PROGRAM_DATA.EVENTS.LOAD_MORE,
      loadMoreText: I18N.EN.LOAD_MORE
    };
  },
  methods: {
    loadMore: function() {
      this.$store.dispatch(ACTION_KEYS.LOAD_MORE);
    },
    createLinkForCard: function(id) {
      return ROUTES_PATHS.MOVIES + "/" + id;
    }
  },
  computed: {
    pageIsFullyLoaded() {
      return (
        this.$store.state[STATE_KEYS.NUMBER_OF_CARDS_ON_PAGE] >=
        this.$store.state[STATE_KEYS.FILMS_COUNT]
      );
    },
    isCardDetailsPage() {
      return this.$route.name === ROUTES_NAMES.MOVIE_BY_ID;
    }
  }
};
</script>
