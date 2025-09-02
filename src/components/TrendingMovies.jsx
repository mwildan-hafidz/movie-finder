function TrendingMovies() {
  const trendingMovies = [
    {
      title: "Superman",
      year: "2025",
      imdbID: "tt5950044",
      type: "movie",
      poster: "https://m.media-amazon.com/images/M/MV5BOGMwZGJiM2EtMzEwZC00YTYzLWIxNzYtMmJmZWNlZjgxZTMwXkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      title: "Thunderbolts*",
      year: "2025",
      imdbID: "tt20969586",
      type: "movie",
      poster: "https://m.media-amazon.com/images/M/MV5BYWE2NmNmYTItZGY0ZC00MmY2LTk1NDAtMGUyMGEzMjcxNWM0XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      title: "KPOP Demon Hunters",
      year: "2025",
      imdbID: "tt14205554",
      type: "movie",
      poster: "https://m.media-amazon.com/images/M/MV5BNTBiYWJlMjQtOTIyMy00NTY4LWFhOWItOWZhNzc3NGMyMjc2XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      title: "The Fantastic Four: First Steps",
      year: "2025",
      imdbID: "tt10676052",
      type: "movie",
      poster: "https://m.media-amazon.com/images/M/MV5BOGM5MzA3MDAtYmEwMi00ZDNiLTg4MDgtMTZjOTc0ZGMyNTIwXkEyXkFqcGc@._V1_SX300.jpg"
    },
  ];

  return (
    <section className="py-5 px-3 px-md-5">
      <div className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {trendingMovies.map((movie, index) => {
            return (
              <TrendingMoviesItem movie={movie} index={index} key={movie.imdbID} />
            )
          })}
        </div>
      </div>
    </section>
  );
}

export default TrendingMovies;

function TrendingMoviesItem({ movie, index }) {
  return (
    <div className={`carousel-item ${index === 0 && 'active'}`}>
      <div className="container">
        <div className="row">
          <div className="col-6 col-sm-8">
            {/* <h1 className="display-3">{movie.title}</h1> */}
            <p className="display-6">{movie.title}</p>
            <button className="btn btn-dark mt-3">Watch</button>
          </div>
          <div className="col-6 col-sm-4">
            <img src={movie.poster} className="w-100 object-fit-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}