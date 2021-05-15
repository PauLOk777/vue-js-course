const ROUTES_PATHS = {
  MOVIES: "/movies",
  MOVIE_BY_ID: "/movies/:id(\\d+)",
  ALL_ROUTES: "*"
};

const ROUTES_NAMES = {
  MOVIES: "movies",
  MOVIE_BY_ID: "movie_details",
  NOT_FOUND: "not_found"
};

export { ROUTES_PATHS, ROUTES_NAMES };
