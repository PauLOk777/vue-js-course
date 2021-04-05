<template>
  <div class="film_gallery position-relative">
    <div v-if="!cards || !cards.length" class="no_results_text">
      <span>{{ no_films }}</span>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="card in cards" :key="card.title">
          <film-card class="mb-4" :card="card" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/filmGallery.css";
import FilmCard from "./FilmCard.vue";
import { I18N } from "../core/constants";
export default {
  name: "FilmGallery",
  components: { FilmCard },
  props: {
    cards: { type: Array }
  },
  data() {
    return {
      no_films: I18N["EN"].NO_FILMS
    };
  }
};
</script>
