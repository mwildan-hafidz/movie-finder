export default function SearchForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className="bg-body-secondary py-3 px-md-5">
      <div className="container">
        <form className="input-group" id="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Search for movies"
            id="search-input"
          />
          <button className="btn btn-dark" type="submit">Search</button>
        </form>
      </div>
    </section>
  )
}