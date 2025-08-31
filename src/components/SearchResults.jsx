import poster from '../images/avengers-poster.jpg';

export default function SearchResults({ movies, isLoading }) {
  return (
    <section className="py-5 px-md-5 flex-fill">
      <div className="container">
        {isLoading ? <Spinner /> : <Results movies={movies} />}
      </div>
    </section>
  );
}

function Results({ movies }) {
  return (
    <>
      {
        movies.length === 0 ? <NotFound /> : <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3">
          {movies.map(movie => <Card posterURL={movie.Poster} key={movie.imdbID} />)}
        </div>
      }
    </>
  )
}

function Card({ posterURL }) {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={posterURL} className="card-img h-100 object-fit-cover" />
      </div>
    </div>
  );
}

function Spinner() {
  return (
    <div className="text-center">
      <div className="spinner-border text-secondary" />
    </div>
  );
}

function NotFound() {
  return (
    <div className="text-center">
      <h1 className="text-secondary">Not Found!</h1>
    </div>
  )
}