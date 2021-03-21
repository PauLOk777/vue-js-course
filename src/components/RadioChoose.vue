<template>
  <div class="radio_choose">
    <span v-if="text" class="radio_choose_text">{{text}}</span>
    <input type="radio" :id="deleteAllSpaces(first_option)" :name="options_name" :value="first_option" checked />
    <label :for="deleteAllSpaces(first_option)">{{first_option}}</label>
    <input type="radio" :id="deleteAllSpaces(second_option)" :name="options_name" :value="second_option" />
    <label :for="deleteAllSpaces(second_option)">{{second_option}}</label>
  </div>
</template>

<script>
import "../assets/radioChoose.css";
export default {
  name: "RadioChoose",
  props: {
    text: String,
    first_option: {
      type: String,
      require: true
    },
    second_option: {
      type: String,
      require: true
    },
    options_name: {
      type: String,
      require: true
    }
  },
  methods: {
    deleteAllSpaces: function(text) {
      if (text) {
        return text.replaceAll(/\s/g, "");
      } else {
        return "";
      }
    }
  }
};
</script>
