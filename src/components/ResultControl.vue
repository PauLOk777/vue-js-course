<template>
  <div class="result_control">
    <div class="row justify-content-between">
      <div class="bold_span col-6 align-self-center">
        <div v-if="number_of_movies > 0">
          <span class="movies-found"
            >{{ number_of_movies }} {{ movies_found }}</span
          >
        </div>
      </div>
      <div class="col-6 text-right">
        <radio-choose
          :first_option="first_option"
          :first_option_value="first_option_value"
          :second_option="second_option"
          :second_option_value="second_option_value"
          :options_name="options_name"
          @changeOption="changeSortOption"
        />
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/resultControl.css";
import RadioChoose from "./RadioChoose.vue";
import { I18N } from "../core/constants";
import { ACTION_KEYS, MUTATIONS_KEYS } from "../core/store";
export default {
  name: "ResultControl",
  components: { RadioChoose },
  props: {
    number_of_movies: Number,
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
  data() {
    return {
      movies_found: I18N["EN"].MOVIES_FOUND
    };
  },
  created() {
    this.$store.commit(MUTATIONS_KEYS.SET_SORT_OPTION, this.first_option_value);
  },
  methods: {
    changeSortOption: function(value) {
      this.$store.commit(MUTATIONS_KEYS.SET_SORT_OPTION, value);
      this.$store.dispatch(ACTION_KEYS.SEARCH_FILMS);
    }
  }
};
</script>
