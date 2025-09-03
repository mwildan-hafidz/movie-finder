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
    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-2">
      {movies.map(movie => <Card movie={movie} key={movie.imdbID} />)}
    </div>
  )
}

function Card({ movie }) {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={movie.Poster} className="card-img-top h-100 object-fit-cover" />
        <div className="card-body position-relative">
          <h6 className="card-title text-nowrap overflow-x-hidden overflow-x-fade py-1">{movie.Title}</h6>
          <h6 className="card-subtitle text-body-secondary">{movie.Year}</h6>
        </div>
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