<template>
  <div id="app">
    <search-page v-if="current_page == search_page" />
    <card-details-page v-if="current_page == card_details_page" :card="card" />
  </div>
</template>

<script>
import "./assets/app.css";
import CardDetailsPage from "./components/CardDetailsPage.vue";
import SearchPage from "./components/SearchPage.vue";
import { EventBus } from "./event-bus";
import { PROGRAM_DATA } from "./core/constants";

export default {
  name: "App",
  components: {
    SearchPage,
    CardDetailsPage
  },
  mounted() {
    EventBus.$on(PROGRAM_DATA.EVENTS.CHANGE_PAGE_TO_SEARCH, () => {
      this.current_page = PROGRAM_DATA.PAGES.SEARCH_PAGE;
    });

    EventBus.$on(PROGRAM_DATA.EVENTS.CHANGE_PAGE_TO_CART_DETAILS, card => {
      this.card = card;
      this.current_page = PROGRAM_DATA.PAGES.CARD_DETAILS_PAGE;
    });
  },
  data() {
    return {
      current_page: PROGRAM_DATA.PAGES.SEARCH_PAGE,
      search_page: PROGRAM_DATA.PAGES.SEARCH_PAGE,
      card_details_page: PROGRAM_DATA.PAGES.CARD_DETAILS_PAGE,
      card: {}
    };
  }
};
</script>
