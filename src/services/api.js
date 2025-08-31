import APIKEY from "../config";

export function getMovies(name) {
  return fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${name}`)
    .then(res => res.json())
    .then(json => json.Response === "True" ? json.Search : []);
}