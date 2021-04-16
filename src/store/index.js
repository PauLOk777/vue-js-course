import Vue from "vue";
import Vuex from "vuex";
import films from "../resources/movies.json";
import {
  STATE_KEYS,
  GETTERS_KEYS,
  MUTATIONS_KEYS,
  ACTION_KEYS
} from "../core/store";
import { APP_DATA, FILM_KEYS } from "../core/constants";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    [STATE_KEYS.FILMS]: films,
    [STATE_KEYS.SEARCH_FILMS]: [],
    [STATE_KEYS.SEARCH_CRITERIA]: "",
    [STATE_KEYS.SORT_OPTION]: "",
    [STATE_KEYS.NUMBER_OF_CARDS_ON_PAGE]: 0
  },
  getters: {
    [GETTERS_KEYS.GET_NUMBER_OF_CARDS_ON_PAGE]: function(state) {
      return state[STATE_KEYS.SEARCH_FILMS].slice(
        0,
        state[STATE_KEYS.NUMBER_OF_CARDS_ON_PAGE]
      );
    },

    [GETTERS_KEYS.FILMS_COUNT]: function(state) {
      return state[STATE_KEYS.SEARCH_FILMS].length;
    },

    [GETTERS_KEYS.FIND_FILM_BY_ID]: function(state) {
      return id =>
        state[STATE_KEYS.FILMS].find(
          film => film[FILM_KEYS.ID] === parseInt(id)
        );
    },

    [GETTERS_KEYS.GET_ALL_GENRES]: function(state) {
      let genres = [];
      state[STATE_KEYS.FILMS].forEach(
        film => (genres = genres.concat(film[FILM_KEYS.GENRES]))
      );
      return [...new Set(genres)];
    },

    [GETTERS_KEYS.PAGE_IS_FULLY_LOADED]: function(state) {
      return (
        state[STATE_KEYS.SEARCH_FILMS].length <=
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

    [MUTATIONS_KEYS.SET_SEARCH_FILMS]: function(state, films) {
      state[STATE_KEYS.SEARCH_FILMS] = films;
    },

    [MUTATIONS_KEYS.SET_NUMBER_OF_CARDS_ON_PAGE]: function(state, number) {
      state[STATE_KEYS.NUMBER_OF_CARDS_ON_PAGE] = number;
    },

    [MUTATIONS_KEYS.FIND_FILMS_BY_GENRE]: function(state, genre) {
      state[STATE_KEYS.SEARCH_FILMS] = state[STATE_KEYS.FILMS].filter(film =>
        film[FILM_KEYS.GENRES].includes(genre)
      );
    },

    [MUTATIONS_KEYS.SORT_SEARCH_FILMS]: function(state) {
      let option = "";
      if (state[STATE_KEYS.SORT_OPTION] === APP_DATA.REALESED_DATE_VALUE) {
        option = FILM_KEYS.REALESE_DATE;
      }
      if (state[STATE_KEYS.SORT_OPTION] === APP_DATA.RATING_VALUE) {
        option = FILM_KEYS.VOTE_AVERAGE;
      }

      state[STATE_KEYS.SEARCH_FILMS].sort((a, b) => {
        if (a[option] < b[option]) {
          return 1;
        }
        if (a[option] > b[option]) {
          return -1;
        }
        return 0;
      });
    }
  },
  actions: {
    [ACTION_KEYS.SEARCH_FILMS]: function(context, text) {
      let films = [];
      if (context.state[STATE_KEYS.SEARCH_CRITERIA] === APP_DATA.TITLE_VALUE) {
        films = context.state[STATE_KEYS.FILMS].filter(film =>
          film[FILM_KEYS.TITLE].includes(text)
        );
      }
      if (context.state[STATE_KEYS.SEARCH_CRITERIA] === APP_DATA.GENRE_VALUE) {
        films = context.state[STATE_KEYS.FILMS].filter(film => {
          const genres = film[FILM_KEYS.GENRES].filter(genre =>
            genre.includes(text)
          );
          return genres.length;
        });
      }
      context.commit(
        MUTATIONS_KEYS.SET_NUMBER_OF_CARDS_ON_PAGE,
        APP_DATA.CARDS_PER_PAGE
      );
      context.commit(MUTATIONS_KEYS.SET_SEARCH_FILMS, films);
      context.commit(MUTATIONS_KEYS.SORT_SEARCH_FILMS);
    }
  }
});
