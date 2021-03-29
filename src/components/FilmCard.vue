<template>
  <div class="card">
    <a href="#" @click="getCardDetailsPage">
      <img class="card-img-top" :src="card.imageUrl" />
    </a>
    <div class="card-body">
      <div class="row">
        <div class="col-9">
          <h6 class="card-title">{{ card.title }}</h6>
        </div>
        <p class="col card-title border rounded">{{ card.releaseDate }}</p>
      </div>
      <div class="row">
        <div class="col-9">
          <p class="card-text">{{ card.genre }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/filmCard.css";
import { EventBus } from "../event-bus";
import { PROGRAM_DATA } from "../core/constants";
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
  }
};
</script>
