import parseYear from "../filters/parseYearFromDate";
import getRandomGenre from "../filters/getRandomGenre";
import joinGenres from "../filters/joinGenres";
import parseDuration from "../filters/parseDuration";
import { FILTERS } from "../core/constants";

export default {
  install: function(Vue) {
    Vue.filter(FILTERS.PARSE_YEAR_FROM_DATE, parseYear);
    Vue.filter(FILTERS.GET_RANDOM_GENRE, getRandomGenre);
    Vue.filter(FILTERS.JOIN_GENRES, joinGenres);
    Vue.filter(FILTERS.PARSE_DURATION, parseDuration);
  }
};
