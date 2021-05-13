import Vue from "vue";
import Vuex from "vuex";
import ApiService from "../core/api";
import {
  STATE_KEYS,
  GETTERS_KEYS,
  MUTATIONS_KEYS,
  ACTION_KEYS
} from "../core/store";
import { APP_DATA, API } from "../core/constants";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    [STATE_KEYS.SEARCH_FILMS]: [],
    [STATE_KEYS.SEARCH_CRITERIA]: "",
    [STATE_KEYS.SORT_OPTION]: "",
    [STATE_KEYS.SORT_ORDER]: APP_DATA.DESC,
    [STATE_KEYS.SEARCH_TEXT]: "",
    [STATE_KEYS.NUMBER_OF_CARDS_ON_PAGE]: 0,
    [STATE_KEYS.FILMS_COUNT]: 0
  },

  getters: {
    [GETTERS_KEYS.GET_CARDS_ON_PAGE]: function(state) {
      return state[STATE_KEYS.SEARCH_FILMS].slice(
        0,
        state[STATE_KEYS.NUMBER_OF_CARDS_ON_PAGE]
      );
    }
  },

  mutations: {
    [MUTATIONS_KEYS.SET_SEARCH_CRITERIA]: function(state, searchCriteria) {
      state[STATE_KEYS.SEARCH_CRITERIA] = searchCriteria;
    },

    [MUTATIONS_KEYS.SET_SORT_OPTION]: function(state, sortOption) {
      state[STATE_KEYS.SORT_OPTION] = sortOption;
    },

    [MUTATIONS_KEYS.SET_SEARCH_TEXT]: function(state, text) {
      state[STATE_KEYS.SEARCH_TEXT] = text;
    },

    [MUTATIONS_KEYS.SET_SEARCH_FILMS]: function(state, films) {
      state[STATE_KEYS.SEARCH_FILMS] = films;
    },

    [MUTATIONS_KEYS.SET_NUMBER_OF_CARDS_ON_PAGE]: function(state, number) {
      state[STATE_KEYS.NUMBER_OF_CARDS_ON_PAGE] = number;
    },

    [MUTATIONS_KEYS.SET_FILMS_COUNT]: function(state, count) {
      state[STATE_KEYS.FILMS_COUNT] = count;
    },

    [MUTATIONS_KEYS.ADD_FILMS]: function(state, films) {
      state[STATE_KEYS.SEARCH_FILMS] = state[STATE_KEYS.SEARCH_FILMS].concat(
        films
      );
    }
  },

  actions: {
    [ACTION_KEYS.SEARCH_FILMS]: async function(context) {
      const params = {
        [API.KEYS.SORT_BY]: context.state[STATE_KEYS.SORT_OPTION],
        [API.KEYS.SORT_ORDER]: context.state[STATE_KEYS.SORT_ORDER],
        [API.KEYS.SEARCH]: context.state[STATE_KEYS.SEARCH_TEXT],
        [API.KEYS.SEARCH_BY]: context.state[STATE_KEYS.SEARCH_CRITERIA],
        [API.KEYS.OFFSET]: 0,
        [API.KEYS.LIMIT]: APP_DATA.CARDS_PER_PAGE
      };

      const info = await ApiService.getMoviesByParameters(params);
      const films = info.data;
      const filmsCount = info.total;

      context.commit(MUTATIONS_KEYS.SET_SEARCH_FILMS, films);
      context.commit(MUTATIONS_KEYS.SET_FILMS_COUNT, filmsCount);
      context.commit(
        MUTATIONS_KEYS.SET_NUMBER_OF_CARDS_ON_PAGE,
        APP_DATA.CARDS_PER_PAGE
      );
    },

    [ACTION_KEYS.LOAD_MOVIES]: async function(context, limit) {
      const films = await ApiService.getMoviesWithLimit(limit);
      context.commit(MUTATIONS_KEYS.SET_SEARCH_FILMS, films);
      context.commit(MUTATIONS_KEYS.SET_FILMS_COUNT, limit);
      context.commit(
        MUTATIONS_KEYS.SET_NUMBER_OF_CARDS_ON_PAGE,
        APP_DATA.CARDS_PER_PAGE
      );
    },

    [ACTION_KEYS.LOAD_MORE]: async function(context) {
      const params = {
        [API.KEYS.SORT_BY]: context.state[STATE_KEYS.SORT_OPTION],
        [API.KEYS.SORT_ORDER]: context.state[STATE_KEYS.SORT_ORDER],
        [API.KEYS.SEARCH]: context.state[STATE_KEYS.SEARCH_TEXT],
        [API.KEYS.SEARCH_BY]: context.state[STATE_KEYS.SEARCH_CRITERIA],
        [API.KEYS.OFFSET]: context.state[STATE_KEYS.NUMBER_OF_CARDS_ON_PAGE],
        [API.KEYS.LIMIT]: APP_DATA.CARDS_PER_PAGE
      };

      const info = await ApiService.getMoviesByParameters(params);
      const films = info.data;

      context.commit(MUTATIONS_KEYS.ADD_FILMS, films);
      context.commit(
        MUTATIONS_KEYS.SET_NUMBER_OF_CARDS_ON_PAGE,
        Math.min(
          context.state[STATE_KEYS.NUMBER_OF_CARDS_ON_PAGE] +
            APP_DATA.CARDS_PER_PAGE,
          context.state[STATE_KEYS.FILMS_COUNT]
        )
      );
    }
  }
});
