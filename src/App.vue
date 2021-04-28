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
import { APP_DATA, PROGRAM_DATA } from "./core/constants";
import { ACTION_KEYS, STATE_KEYS, MUTATIONS_KEYS } from "./core/store";

export default {
  name: "App",
  components: {
    SearchPage,
    CardDetailsPage
  },
  mounted() {
    this.$store.dispatch(ACTION_KEYS.LOAD_MOVIES, APP_DATA.CARDS_PER_PAGE);

    EventBus.$on(PROGRAM_DATA.EVENTS.CHANGE_PAGE_TO_SEARCH, () => {
      this.$store.commit(MUTATIONS_KEYS.SET_CURRENT_PAGE, this.search_page);
    });

    EventBus.$on(PROGRAM_DATA.EVENTS.CHANGE_PAGE_TO_CART_DETAILS, data => {
      this.card = data;
      this.$store.commit(
        MUTATIONS_KEYS.SET_CURRENT_PAGE,
        this.card_details_page
      );
    });
  },
  data() {
    return {
      search_page: PROGRAM_DATA.PAGES.SEARCH_PAGE,
      card_details_page: PROGRAM_DATA.PAGES.CARD_DETAILS_PAGE,
      card: {}
    };
  },
  computed: {
    current_page() {
      return this.$store.state[STATE_KEYS.CURRENT_PAGE];
    }
  }
};
</script>
