<template>
  <div class="load_more_button">
    <input
      type="button"
      class="button"
      :value="text"
      @click="loadMore"
      :style="`width: ${width_percentage}%`"
    />
  </div>
</template>

<script>
import "../assets/searchButton.css";
import { PROGRAM_DATA } from "../core/constants";
export default {
  name: "LoadMoreButton",
  props: {
    text: String,
    width_percentage: {
      type: Number,
      default: 30
    }
  },
  methods: {
    loadMore: function() {
      this.$emit(PROGRAM_DATA.EVENTS.LOAD_MORE);
    }
  }
};
</script>
