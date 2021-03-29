<template>
  <div class="search_button">
    <input
      type="button"
      class="button"
      :value="text"
      @click="emitGetMovies"
      :style="`width: ${width_percentage}%`"
    />
  </div>
</template>

<script>
import "../assets/searchButton.css";
import { PROGRAM_DATA } from "../core/constants";
export default {
  name: "SearchButton",
  props: {
    text: String,
    width_percentage: {
      type: Number,
      default: 100
    }
  },
  methods: {
    emitGetMovies: function() {
      this.$emit(PROGRAM_DATA.EVENTS.GET_MOVIES);
    }
  }
};
</script>
