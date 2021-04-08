<template>
  <div class="card">
    <a href="#" @click="getCardDetailsPage">
      <img class="card-img-top" :src="card.poster_path" />
    </a>
    <div class="card-body">
      <div class="row">
        <div class="col-9">
          <h6 class="card-title">{{ card.title }}</h6>
        </div>
        <p class="col card-title border rounded">
          {{ parsedYear }}
        </p>
      </div>
      <div class="row">
        <div class="col-9">
          <p class="card-text">{{ genres }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/filmCard.css";
import { EventBus } from "../event-bus";
import { PROGRAM_DATA } from "../core/constants";
import { getYearFromDate, joinGenres } from "../utils";
export default {
  name: "FilmCard",
  props: {
    card: Object
  },
  methods: {
    getCardDetailsPage: function() {
      EventBus.$emit(
        PROGRAM_DATA.EVENTS.CHANGE_PAGE_TO_CART_DETAILS,
        this.card
      );
    }
  },
  computed: {
    genres() {
      return joinGenres(this.card.genres);
    },
    parsedYear() {
      return getYearFromDate(this.card.release_date);
    }
  }
};
</script>
