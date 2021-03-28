<template>
  <div class="result_contol">
    <div class="row justify-content-between">
      <div class="bold_span col-6 align-self-center">
        <span v-if="number_of_movies > 1">{{number_of_movies}} movies found</span>
        <span v-else>{{number_of_movies}} movie found</span>
      </div>
      <div class="col-6 text-right">
        <radio-choose :first_option="first_option" :second_option="second_option" :options_name="options_name" />
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/resultControl.css";
import RadioChoose from './RadioChoose.vue';

export default {
  name: "ResultControl",
  components: { RadioChoose },
  props: {
    number_of_movies: Number,
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
  }
};
</script>
