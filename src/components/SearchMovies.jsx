import { useState } from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import apiKey from "../config";

function SearchMovies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (search) => {
    setIsLoading(true);

    const newMovies = await getMovies(search);
    setMovies(newMovies);

    setIsLoading(false);
  }

  return (
    <>
      <SearchForm onSearch={handleSearch} />
      <SearchResults movies={movies} isLoading={isLoading} />
    </>
  )
}

export default SearchMovies;

function getMovies(name) {
  return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${name}`)
    .then(res => res.json())
    .then(json => json.Response === "True" ? json.Search : []);
}