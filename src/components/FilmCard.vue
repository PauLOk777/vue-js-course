<template>
  <div class="card">
    <img class="card-img-top" :src="card.poster_path" />
    <div class="card-body">
      <div class="row">
        <div class="col-9">
          <h6 class="card-title">{{ card.title }}</h6>
        </div>
        <p class="col card-title border rounded">
          {{ card.release_date | parseYearFromDate }}
        </p>
      </div>
      <div class="row">
        <div class="col-9">
          <p class="card-text">{{ card.genres | joinGenres }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/filmCard.css";
export default {
  name: "FilmCard",
  props: {
    card: Object
  }
};
</script>
