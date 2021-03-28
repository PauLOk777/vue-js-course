<template>
  <div class="film_gallery">
    <div v-if="!cards || !cards.length" class="no_results_text">
      No films availiable
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="card in cards" :key="card.title">
          <film-card
            class="mb-4"
            :imageUrl="card.imageUrl"
            :title="card.title"
            :releaseDate="card.releaseDate"
            :genre="card.genre"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/filmGallery.css"
import FilmCard from "./FilmCard.vue";

export default {
  name: "FilmGallery",
  components: { FilmCard },
  props: {
    cards: { type: Array }
  }
};
</script>
