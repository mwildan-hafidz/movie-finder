import poster from '../images/avengers-poster.jpg';

export default function SearchResults() {
  return (
    <section className="py-5 px-md-5">
      <div className="container">
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3">
          <div className="col">
            <div className="card">
              <img src={poster} className="card-img" />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={poster} className="card-img" />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={poster} className="card-img" />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={poster} className="card-img" />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={poster} className="card-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}