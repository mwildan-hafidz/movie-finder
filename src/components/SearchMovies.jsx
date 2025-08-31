import { useState } from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import { getMovies } from "../services/api";

function SearchMovies() {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (search) => {
    setIsLoading(true);

    try {
      const newMovies = await getMovies(search);
      setMovies(newMovies);
    }
    catch (err) {
      console.error("Failed to fetch movies:", err);
      setMovies([]);
    }
    finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <SearchForm onSearch={handleSearch} isLoading={isLoading} />
      <SearchResults movies={movies} isLoading={isLoading} />
    </>
  )
}

export default SearchMovies;
