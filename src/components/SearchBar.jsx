import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../styles/Search.css";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  const handleTitleClick = () => {
    window.location.reload();
  };

  return (
    <div className="headerpart">
      <div
        className="apptitle"
        onClick={handleTitleClick}
        style={{ cursor: "pointer" }}
      >
        <h3>
          movie<span className="secTitle">Finder</span>
        </h3>
      </div>
      <form onSubmit={handleSubmit} className="search-bar">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={handleChange}
          aria-label="Movie search input"
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
