import { useState } from "react";

export default function SearchForm({ onSearch, isLoading }) {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    onSearch(search);
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
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button className="btn btn-dark" type="submit" disabled={isLoading}>Search</button>
        </form>
      </div>
    </section>
  )
}