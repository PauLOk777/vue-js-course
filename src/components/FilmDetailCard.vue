<template>
  <div class="card-details">
    <div class="col-4 d-inline-block">
      <img :src="card.imageUrl" class="card-img" />
    </div>
    <div class="col-8 d-inline-block">
      <div class="card-body">
        <div class="row">
          <div>
            <h1 class="pr-3 card-detail-text">{{ card.title }}</h1>
          </div>
          <div class="text-center">
            <span class="border rounded-circle p-2 h1 rating-text">
              {{ card.rate }}
            </span>
          </div>
        </div>
        <div class="row p-1">
          <p class="card-detail-text small">{{ card.genre }}</p>
        </div>
        <div class="row p-1">
          <div class="pr-3">
            <span class="key_numbers">{{ card.releaseDate }} </span>
            <span class="small">{{ year }}</span>
          </div>
          <div class="pl-3">
            <span class="key_numbers">{{ card.duration }} </span>
            <span class="small">{{ minutes }}</span>
          </div>
        </div>
        <div class="row p-1">
          <p class="card-detail-text">
            {{ card.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/filmDetailCard.css";
import { I18N } from "../core/constants";
export default {
  name: "FilmDetailCard",
  props: {
    card: Object
  },
  data() {
    return {
      year: I18N["EN"].YEAR,
      minutes: I18N["EN"].MINUTES_SHORT
    };
  }
};
</script>
