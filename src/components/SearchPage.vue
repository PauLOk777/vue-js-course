<template>
  <div id="search_page">
    <custom-header />
    <result-control
      :number_of_movies="cards.length"
      :first_option="realesed_date_text"
      :first_option_value="realesed_date_value"
      :second_option="rating_text"
      :second_option_value="rating_value"
      :options_name="sort_by"
    />
    <film-gallery :cards="cards" />
    <custom-footer :company_name="company_name" :app_name="app_name" />
  </div>
</template>

<script>
import CustomHeader from "./CustomHeader.vue";
import CustomFooter from "./CustomFooter.vue";
import FilmGallery from "./FilmGallery.vue";
import ResultControl from "./ResultControl.vue";
import { EventBus } from "../event-bus";
import { PROGRAM_DATA, I18N, APP_DATA, MOCK_DATA } from "../core/constants";
export default {
  name: "SearchPage",
  components: {
    CustomHeader,
    CustomFooter,
    ResultControl,
    FilmGallery
  },
  data() {
    return {
      realesed_date_text: I18N["EN"].REALEASED_DATE,
      realesed_date_value: APP_DATA.REALESED_DATE_VALUE,
      rating_text: I18N["EN"].RATING,
      rating_value: APP_DATA.RATING_VALUE,
      sort_by: APP_DATA.SORT_BY,
      cards: [],
      company_name: I18N["EN"].COMPANY_NAME,
      app_name: I18N["EN"].APP_NAME
    };
  },
  mounted() {
    EventBus.$on(PROGRAM_DATA.EVENTS.GET_MOVIES_BY_OPTION, data => {
      if (data.input && data.input != "" && data.option) {
        this.cards = MOCK_DATA.CARDS;
      } else {
        this.cards = [];
      }
    });
  }
};
</script>
