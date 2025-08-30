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
    </>
  )
}
