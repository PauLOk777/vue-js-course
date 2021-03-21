<template>
  <div class="row card-details">
    <div class="col-4">
      <img :src="imageUrl" class="card-img" />
    </div>
    <div class="col-8">
      <div class="card-body">
        <div class="row">
          <div>
            <h1 class="pr-3 card-detail-text">{{ title }}</h1>
          </div>
          <div class="text-center">
            <span class="border rounded-circle p-2 h1 rating-text">
              {{ rate }}
            </span>
          </div>
        </div>
        <div class="row p-1">
          <p class="card-detail-text small">{{ genre }}</p>
        </div>
        <div class="row p-1">
          <div class="pr-3">
            <span class="key_numbers">{{ releaseDate }}</span>
            <span class="small"> year</span>
          </div>
          <div class="pl-3">
            <span class="key_numbers">{{ duration }} </span>
            <span class="small">min</span>
          </div>
        </div>
        <div class="row p-1">
          <p class="card-detail-text">
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/filmDetailCard.css";
export default {
  name: "FilmDetailCard",
  props: {
    imageUrl: {
      type: String,
      require: true
    },
    title: {
      type: String,
      require: true
    },
    releaseDate: {
      type: Number,
      require: true
    },
    duration: {
      type: Number,
      require: true
    },
    genre: {
      type: String,
      require: true
    },
    description: {
      type: String,
      require: true
    },
    rate: {
      type: Number,
      require: true
    }
  }
};
</script>
