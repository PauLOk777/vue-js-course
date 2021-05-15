const PROGRAM_DATA = {
  EVENTS: {
    GET_MOVIES_BY_OPTION: "getMoviesByOption",
    GET_MOVIES: "getMovies",
    INPUT_CHANGE: "inputChange",
    CHANGE_OPTION: "changeOption",
    LOAD_MORE: "loadMore"
  }
};

const APP_DATA = {
  REALESED_DATE_VALUE: "realesed_date",
  RATING_VALUE: "rating",
  SORT_BY: "sort_by",
  TITLE_VALUE: "title",
  GENRE_VALUE: "genres",
  SEARCH_BY: "search_by",
  CARDS_PER_PAGE: 3,
  ASC: "asc",
  DESC: "desc"
};

const I18N = {
  EN: {
    REALEASED_DATE: "REALESED DATE",
    RATING: "RATING",
    COMPANY_NAME: "netflix",
    APP_NAME: "roulette",
    MOVIES_FOUND: "movies found",
    FIND_YOUR_MOVIE: "FIND YOUR MOVIE",
    SEARCH_TEXT_FOR_INPUT: "Search",
    SEARCH_TEXT_FOR_BUTTON: "SEARCH",
    SEARCH_BY: "Search by",
    TITLE: "Title",
    GENRE: "Genre",
    NO_FILMS: "No films available",
    YEAR: "year",
    MINUTES_SHORT: "min",
    FILMS_BY: "Films by",
    BY_GENRE: "genre",
    UNKNOWN: "unknown",
    LOAD_MORE: "LOAD MORE",
    FIND_MOVIES: "Find movies"
  }
};

const MOCK_DATA = {
  CARDS: [
    {
      id: 1,
      imageUrl:
        "https://static.posters.cz/image/1300/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82/pulp-fiction-cover-i1288.jpg",
      title: "Pulp Fiction",
      genre: "Oscar winning Movie",
      releaseDate: 1994,
      duration: 178,
      vote_average: 4.5,
      overview:
        "Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary. Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue."
    }
  ]
};

const FILM_KEYS = {
  ID: "id",
  TITLE: "title",
  TAGLINE: "tagline",
  VOTE_AVERAGE: "vote_average",
  VOTE_COUNT: "vote_count",
  REALESE_DATE: "release_date",
  POSTER_PATH: "poster_path",
  OVERVIEW: "overview",
  BUDGET: "budget",
  REVENUE: "revenue",
  GENRES: "genres",
  RUNTIME: "runtime"
};

const FILTERS = {
  PARSE_YEAR_FROM_DATE: "parseYearFromDate",
  GET_RANDOM_GENRE: "getRandomGenre",
  JOIN_GENRES: "joinGenres",
  PARSE_DURATION: "parseDuration"
};

const API = {
  BASE_URI: "https://react-cdp-api.herokuapp.com/",
  MOVIES: "movies/",
  PATH_PARAM_ID: "{id}",
  MOVIES_BY_ID: "movies/{id}",
  KEYS: {
    SORT_BY: "sortBy",
    SORT_ORDER: "sortOrder",
    SEARCH: "search",
    SEARCH_BY: "searchBy",
    FILTER: "filter",
    OFFSET: "offset",
    LIMIT: "limit"
  }
};

export { PROGRAM_DATA, APP_DATA, I18N, MOCK_DATA, FILM_KEYS, FILTERS, API };
