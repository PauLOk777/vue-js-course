<template>
  <div class="search_input">
    <input
      type="text"
      :placeholder="placeholder_text"
      :style="`width: ${width_percentage}%`"
      @input="onChange"
      v-model="current_value"
    />
  </div>
</template>

<script>
import "../assets/searchInput.css";
import { PROGRAM_DATA } from "../core/constants";
export default {
  name: "SearchInput",
  props: {
    placeholder_text: String,
    width_percentage: {
      type: Number,
      default: 100
    }
  },
  methods: {
    onChange: function() {
      this.$emit(PROGRAM_DATA.EVENTS.INPUT_CHANGE, this.current_value);
    }
  },
  data() {
    return {
      current_value: ""
    };
  }
};
</script>
