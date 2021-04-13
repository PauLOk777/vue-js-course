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
    [STATE_KEYS.SORT_OPTION]: ""
  },
  getters: {
    [GETTERS_KEYS.FILMS_COUNT]: function(state) {
      return state.search_films.length;
    },
    [GETTERS_KEYS.FIND_FILM_BY_ID]: function(state) {
      return id =>
        state.films.find(film => film[FILM_KEYS.ID] === parseInt(id));
    },
    [GETTERS_KEYS.FIND_FILMS_BY_GENRE]: function(state) {
      return genre =>
        state.films.filter(film => film[FILM_KEYS.GENRES].includes(genre));
    },
    [GETTERS_KEYS.GET_ALL_GENRES]: function(state) {
      let genres = [];
      state.films.forEach(
        film => (genres = genres.concat(film[FILM_KEYS.GENRES]))
      );
      return [...new Set(genres)];
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
      context.commit(MUTATIONS_KEYS.SET_SEARCH_FILMS, films);
      context.commit(MUTATIONS_KEYS.SORT_SEARCH_FILMS);
    }
  }
});
