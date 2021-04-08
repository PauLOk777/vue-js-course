const STATE_KEYS = {
  FILMS: "films",
  SEARCH_FILMS: "search_films",
  SEARCH_CRITERIA: "search_criteria",
  SORT_OPTION: "sort_option"
};

const GETTERS_KEYS = {
  FILMS_COUNT: "filmsCount",
  FIND_FILM_BY_ID: "findFilmById",
  FIND_FILMS_BY_GENRE: "findFilmsByGenre",
  GET_ALL_GENRES: "getAllGenres"
};

const MUTATIONS_KEYS = {
  SET_SEARCH_CRITERIA: "setSearchCriteria",
  SET_SORT_OPTION: "setSortOption",
  SET_SEARCH_FILMS: "setSearchFilms",
  SORT_SEARCH_FILMS: "sortSeachFilms"
};

const ACTION_KEYS = {
  SEARCH_FILMS: "searchFilms"
};

export { STATE_KEYS, GETTERS_KEYS, MUTATIONS_KEYS, ACTION_KEYS };
