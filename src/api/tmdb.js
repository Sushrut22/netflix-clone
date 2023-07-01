import key from "../key.json";
import Api from "../utils/api";

const API_BASE = "https://api.themoviedb.org/3/movie/11";
const API_KEY = key.TMDB_API_KEY;

// from tmdb
const tmdb = new Api({
  baseUrl: API_BASE,
  searchParams: { api_key: API_KEY },
});

export default tmdb;
