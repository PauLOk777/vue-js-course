<template>
  <div class="huge_font_paragraph">
    <p :style="`color: ${color}`">{{ text }}</p>
  </div>
</template>

<script>
import "../assets/hugeFontParagraph.css";
export default {
  name: "HugeFontParagraph",
  props: {
    text: {
      type: String,
      require: true
    },
    color: {
      type: String,
      default: "none"
    }
  }
};
</script>
