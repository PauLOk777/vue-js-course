<template>
  <div id="nav_bar">
    <form action="#">
      <div class="text-left mb-4">
        <huge-font-paragraph :text="paragraph_text" />
      </div>
      <div class="row search_box mb-2">
        <div class="col">
          <search-input
            :placeholder_text="placeholder_text"
            @inputChange="inputChange"
          />
        </div>
        <div class="col col-2">
          <search-button @getMovies="getMoviesByOption" :text="button_text" />
        </div>
      </div>
      <div class="text-left">
        <radio-choose
          :text="radio_text"
          :first_option="title_option"
          :first_option_value="title_option_value"
          :second_option="genre_option"
          :second_option_value="genre_option_value"
          :options_name="radio_name"
          @changeSearchBy="changeSearchBy"
        />
      </div>
    </form>
  </div>
</template>

<script>
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import RadioChoose from "./RadioChoose";
import HugeFontParagraph from "./HugeFontParagraph.vue";
import { EventBus } from "../event-bus";
import { PROGRAM_DATA, APP_DATA, I18N } from "../core/constants";
export default {
  name: "NavigationBar",
  components: {
    SearchInput,
    SearchButton,
    RadioChoose,
    HugeFontParagraph
  },
  data() {
    return {
      paragraph_text: I18N["EN"].FIND_YOUR_MOVIE,
      placeholder_text: I18N["EN"].SEARCH_TEXT_FOR_INPUT,
      button_text: I18N["EN"].SEARCH_TEXT_FOR_BUTTON,
      radio_text: I18N["EN"].SEARCH_BY,
      title_option: I18N["EN"].TITLE,
      title_option_value: APP_DATA.TITLE_VALUE,
      genre_option: I18N["EN"].GENRE,
      genre_option_value: APP_DATA.GENRE_VALUE,
      radio_name: APP_DATA.SEARCH_BY,
      search_by: APP_DATA.TITLE_VALUE,
      input: ""
    };
  },
  methods: {
    getMoviesByOption: function() {
      EventBus.$emit(PROGRAM_DATA.EVENTS.GET_MOVIES_BY_OPTION, {
        input: this.input,
        option: this.search_by
      });
    },

    changeSearchBy: function(value) {
      this.search_by = value;
    },

    inputChange(value) {
      this.input = value;
    }
  }
};
</script>
