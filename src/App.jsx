import { useState } from 'react';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import TrendingMovies from './components/TrendingMovies';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import Footer from './components/Footer';
import apiKey from './config';

function App() {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (search) => {
    const newMovies = await getMovies(search);
    setMovies(newMovies);
  }

  return (
    <Wrapper>
      <Navbar />
      <TrendingMovies />
      <SearchForm onSearch={handleSearch} />
      <SearchResults movies={movies} />
      <Footer />
    </Wrapper>
  )
}

export default App;

function getMovies(name) {
  return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${name}`)
    .then(res => res.json())
    .then(json => json.Response === "True" ? json.Search : []);
}
