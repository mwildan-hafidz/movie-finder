function SearchResults({ movies, isLoading }) {
  return (
    <section className="py-5 px-md-5 flex-fill">
      <div className="container">
        {isLoading ? <Spinner /> : <Results movies={movies} />}
      </div>
    </section>
  );
}

export default SearchResults;

function Results({ movies }) {
  if (movies === null) return <Welcome />
  if (movies.length === 0) return <NotFound />;
  return (
    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3">
      {movies.map(movie => <Card posterURL={movie.Poster} key={movie.imdbID} />)}
    </div>
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

function Welcome() {
  return (
    <div className="text-center">
      <p className="lead text-secondary">Search for some movies above! : &#41;</p>
    </div>
  )
}

function NotFound() {
  return (
    <div className="text-center">
      <p className="lead text-secondary">Not Found! : &#40;</p>
    </div>
  )
}