import axios from "axios";
import { API } from "./constants";

const ApiService = {
  init() {
    axios.defaults.baseURL = API.BASE_URI;
  },

  getMoviesWithLimit(limit) {
    const params = {
      [API.KEYS.LIMIT]: limit
    };

    return axios
      .get(API.MOVIES, { params })
      .then(res => res.data)
      .then(info => info.data);
  },

  getMoviesByParameters(params) {
    return axios.get(API.MOVIES, { params }).then(res => res.data);
  },

  getMovieById(id) {
    return axios
      .get(API.MOVIES_BY_ID.replace(API.PATH_PARAM_ID, id))
      .then(res => res.data);
  }
};

export default ApiService;
