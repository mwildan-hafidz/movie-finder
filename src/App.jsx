import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import TrendingMovies from './components/TrendingMovies';
import SearchMovies from './components/SearchMovies';
import Footer from './components/Footer';

function App() {
  return (
    <Wrapper>
      <Navbar />
      <TrendingMovies />
      <SearchMovies />
      <Footer />
    </Wrapper>
  )
}

export default App;
