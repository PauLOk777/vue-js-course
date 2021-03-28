<template>
  <div class="search_input">
    <input type="text" :placeholder="placeholder_text" :style="`width: ${width_percentage}%`"/>
  </div>
</template>

<script>
import "../assets/searchInput.css";
export default {
  name: "SearchInput",
  props: {
    placeholder_text: String,
    width_percentage: {
      type: Number,
      default: 100
    }
  }
};
</script>
