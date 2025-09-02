function TrendingMovies() {
  return (
    <section className="py-5 px-3 px-md-5">
      <div className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-6 col-sm-8">
                  <h1 className="display-1">Movie I</h1>
                  <button className="btn btn-dark mt-3">Watch</button>
                </div>
                <div className="col-6 col-sm-4">
                  <img src="https://m.media-amazon.com/images/M/MV5BOGMwZGJiM2EtMzEwZC00YTYzLWIxNzYtMmJmZWNlZjgxZTMwXkEyXkFqcGc@._V1_SX300.jpg" className="w-100 object-fit-contain" />
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-6 col-sm-8">
                  <h1 className="display-1">Movie I</h1>
                  <button className="btn btn-dark mt-3">Watch</button>
                </div>
                <div className="col-6 col-sm-4">
                  <img src="https://m.media-amazon.com/images/M/MV5BNTBiYWJlMjQtOTIyMy00NTY4LWFhOWItOWZhNzc3NGMyMjc2XkEyXkFqcGc@._V1_SX300.jpg" className="w-100 object-fit-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrendingMovies;