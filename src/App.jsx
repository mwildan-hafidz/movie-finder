import poster from './images/avengers-poster.jpg';

export default function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container-fluid">
          <span className="navbar-brand h1 mb-0">Movie Finder</span>
        </div>
      </nav>
      {/* Showcased Movie */}
      <section className="py-5 px-3 px-md-5">
        <div className="container">
          <h1 className="display-1">Movie Title</h1>
          <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, officiis.</p>
          <button className="btn btn-dark mt-md-5">Watch</button>
        </div>
      </section>
      {/* Search form */}
      <section className="bg-body-secondary py-3 px-md-5">
        <div className="container">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search for movies" id="search-input" />
            <button className="btn btn-dark" type="button">Search</button>
          </div>
        </div>
      </section>
      {/* Search results */}
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
      {/* Footer */}
      <section className="py-3 bg-body-secondary">
        <div className="container-fluid">
          <p className="text-center mb-0">
            Copyright &copy; 2025 M. Wildan Hafidz. <a href="https://github.com/mwildan-hafidz" class="text-dark">GitHub</a> | All rights reserved.
          </p>
        </div>
      </section>
    </>
  )
}
