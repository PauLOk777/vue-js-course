const STATE_KEYS = {
  FILMS: "films",
  SEARCH_FILMS: "search_films",
  SEARCH_CRITERIA: "search_criteria",
  SORT_OPTION: "sort_option",
  NUMBER_OF_CARDS_ON_PAGE: "number_of_cards_on_page"
};

const GETTERS_KEYS = {
  GET_NUMBER_OF_CARDS_ON_PAGE: "getNumberOfCardsOnPage",
  FILMS_COUNT: "filmsCount",
  FIND_FILM_BY_ID: "findFilmById",
  GET_ALL_GENRES: "getAllGenres",
  PAGE_IS_FULLY_LOADED: "pageIsFullyLoaded"
};

const MUTATIONS_KEYS = {
  SET_SEARCH_CRITERIA: "setSearchCriteria",
  SET_SORT_OPTION: "setSortOption",
  SET_SEARCH_FILMS: "setSearchFilms",
  SET_NUMBER_OF_CARDS_ON_PAGE: "setNumberOfCardsOnPage",
  FIND_FILMS_BY_GENRE: "findFilmsByGenre",
  SORT_SEARCH_FILMS: "sortSeachFilms"
};

const ACTION_KEYS = {
  SEARCH_FILMS: "searchFilms"
};

export { STATE_KEYS, GETTERS_KEYS, MUTATIONS_KEYS, ACTION_KEYS };
