<template>
  <div id="card_details_page">
    <div class="row justify-content-between mb-5 mr-5">
      <logo
        :company_name="company_name"
        :app_name="app_name"
        :style="
          `padding-left:${padding_left_logo}px;margin-left: ${margin_left_logo}px`
        "
      />
      <div class="glyphicon text-right align-self-center">
        <a href="#" @click="getSearchPage">X</a>
      </div>
    </div>
    <film-detail-card :card="card" />
    <div class="result_control">
      <div class="bold_span col-4 text-center">
        <span>{{ films_by }} {{ card.genre }} {{ by_genre }}</span>
      </div>
    </div>
    <film-gallery :cards="cards_by_genre" />
    <custom-footer :company_name="company_name" :app_name="app_name" />
  </div>
</template>

<script>
import "../assets/cardDetailsPage.css";
import CustomFooter from "./CustomFooter.vue";
import FilmDetailCard from "./FilmDetailCard.vue";
import FilmGallery from "./FilmGallery.vue";
import Logo from "./Logo.vue";
import { EventBus } from "../event-bus";
import { PROGRAM_DATA, I18N, MOCK_DATA } from "../core/constants";
export default {
  components: { Logo, FilmDetailCard, FilmGallery, CustomFooter },
  props: {
    card: Object
  },
  data() {
    return {
      company_name: I18N["EN"].COMPANY_NAME,
      app_name: I18N["EN"].APP_NAME,
      cards_by_genre: [],
      padding_left_logo: 30,
      margin_left_logo: 35,
      films_by: I18N["EN"].FILMS_BY,
      by_genre: I18N["EN"].BY_GENRE
    };
  },
  methods: {
    getSearchPage: function() {
      EventBus.$emit(PROGRAM_DATA.EVENTS.CHANGE_PAGE_TO_SEARCH);
    }
  },
  created: function() {
    if (this.card.genre) {
      this.cards_by_genre = MOCK_DATA.CARDS;
    } else {
      this.cards_by_genre = [];
    }
  }
};
</script>
