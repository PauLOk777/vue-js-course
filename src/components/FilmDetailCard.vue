<template>
  <div class="card-details">
    <div class="col-4 d-inline-block">
      <img :src="card.poster_path" class="card-img" />
    </div>
    <div class="col-8 d-inline-block">
      <div class="card-body">
        <div class="row">
          <div>
            <h1 class="pr-3 card-detail-text">{{ card.title }}</h1>
          </div>
          <div class="text-center">
            <span class="border rounded-circle p-2 h1 rating-text">
              {{ card.vote_average }}
            </span>
          </div>
        </div>
        <div class="row p-1">
          <p class="card-detail-text small">{{ genres }}</p>
        </div>
        <div class="row p-1">
          <div class="pr-3">
            <span class="key_numbers">{{ parsedYear }} </span>
            <span class="small">{{ year }}</span>
          </div>
          <div class="pl-3">
            <span class="key_numbers"
              >{{ card.runtime == null ? "unknown" : card.runtime }}
            </span>
            <span class="small">{{ minutes }}</span>
          </div>
        </div>
        <div class="row p-1">
          <p class="card-detail-text">
            {{ card.overview }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/filmDetailCard.css";
import { I18N } from "../core/constants";
import { getYearFromDate, joinGenres } from "../utils";
export default {
  name: "FilmDetailCard",
  props: {
    card: {
      type: Object
    }
  },
  data() {
    return {
      year: I18N["EN"].YEAR,
      minutes: I18N["EN"].MINUTES_SHORT
    };
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
