<template>
  <div class="radio_choose">
    <span v-if="text" class="radio_choose_text">{{ text }}</span>
    <input
      type="radio"
      :id="deleteAllSpaces(first_option_value)"
      :name="options_name"
      :value="first_option_value"
      @change="changeValue(first_option_value)"
      checked
    />
    <label :for="deleteAllSpaces(first_option_value)">{{ first_option }}</label>
    <input
      type="radio"
      :id="deleteAllSpaces(second_option_value)"
      :name="options_name"
      :value="second_option_value"
      @change="changeValue(second_option_value)"
    />
    <label :for="deleteAllSpaces(second_option_value)">{{
      second_option
    }}</label>
  </div>
</template>

<script>
import "../assets/radioChoose.css";
import { PROGRAM_DATA } from "../core/constants";
export default {
  name: "RadioChoose",
  props: {
    text: String,
    first_option: {
      type: String,
      require: true
    },
    first_option_value: {
      type: String,
      require: true
    },
    second_option: {
      type: String,
      require: true
    },
    second_option_value: {
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
    },
    changeValue: function(value) {
      this.$emit(PROGRAM_DATA.EVENTS.CHANGE_SEARCH_BY, value);
    }
  }
};
</script>
