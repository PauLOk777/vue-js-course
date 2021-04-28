const STATE_KEYS = {
  CURRENT_PAGE: "current_page",
  SEARCH_FILMS: "search_films",
  SEARCH_CRITERIA: "search_criteria",
  SORT_OPTION: "sort_option",
  SORT_ORDER: "sort_order",
  SEARCH_TEXT: "searchText",
  NUMBER_OF_CARDS_ON_PAGE: "number_of_cards_on_page",
  FILMS_COUNT: "films_count"
};

const GETTERS_KEYS = {
  GET_CARDS_ON_PAGE: "getCardsOnPage"
};

const MUTATIONS_KEYS = {
  SET_CURRENT_PAGE: "setCurrentPage",
  SET_SEARCH_CRITERIA: "setSearchCriteria",
  SET_SORT_OPTION: "setSortOption",
  SET_SEARCH_TEXT: "setSearchText",
  SET_SEARCH_FILMS: "setSearchFilms",
  SET_NUMBER_OF_CARDS_ON_PAGE: "setNumberOfCardsOnPage",
  SET_FILMS_COUNT: "setFilmsCount",
  ADD_FILMS: "addFilms"
};

const ACTION_KEYS = {
  SEARCH_FILMS: "searchFilms",
  LOAD_MOVIES: "loadMovies",
  LOAD_MORE: "loadMore"
};

export { STATE_KEYS, GETTERS_KEYS, MUTATIONS_KEYS, ACTION_KEYS };
