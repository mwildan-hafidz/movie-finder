import poster from '../images/avengers-poster.jpg';

export default function SearchResults({ movies }) {
  return (
    <section className="py-5 px-md-5 flex-fill">
      <div className="container">
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3">
          {movies.map(movie => <Card posterURL={movie.Poster} key={movie.imdbID} />)}
        </div>
      </div>
    </section>
  );
}

function Card({ posterURL }) {
  return (
    <div className="col">
      <div className="card">
        <img src={posterURL} className="card-img" />
      </div>
    </div>
  );
}