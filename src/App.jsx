import Navbar from './components/Navbar';
import TrendingMovies from './components/TrendingMovies';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <TrendingMovies />
      <SearchForm />
      <SearchResults />
      <Footer />
    </>
  )
}
