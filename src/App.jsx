import { useState, useEffect, useCallback } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ToggleButton from "./components/ToggleButton";
import MovieList from "./components/MovieList";

const OMDB_API_KEY = `bed70732`; // API key

function App() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("movieFavorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [displayMode, setDisplayMode] = useState("search");

  useEffect(() => {
    localStorage.setItem("movieFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const searchMovies = useCallback(async (searchTerm) => {
    setLoading(true);
    setError(null);
    setMovies([]);

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${searchTerm}&apikey=${OMDB_API_KEY}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setError(data.Error); // Handle OMDb API specific errors
      }
    } catch (err) {
      setError("Failed to fetch movies. Please check your network connection."); // Handle network errors
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleToggleFavorite = (movieToToggle) => {
    const isAlreadyFavorite = favorites.some(
      (fav) => fav.imdbID === movieToToggle.imdbID
    );

    if (isAlreadyFavorite) {
      // Remove from favorites
      setFavorites(
        favorites.filter((fav) => fav.imdbID !== movieToToggle.imdbID)
      );
    } else {
      // Add to favorites and preventing duplicates
      setFavorites([...favorites, movieToToggle]);
    }
  };

  const handleDisplayModeChange = (mode) => {
    setDisplayMode(mode);
  };

  useEffect(() => {}, [searchMovies]);

  return (
    <div className="app-container">
      <SearchBar onSearch={searchMovies} />
      <ToggleButton
        currentMode={displayMode}
        onToggle={handleDisplayModeChange}
      />

      <main className="main-content">
        {displayMode === "search" ? (
          <section className="search-results-section">
            <h2>Search Results</h2>
            <MovieList
              movies={movies}
              favorites={favorites}
              loading={loading}
              error={error}
              onToggleFavorite={handleToggleFavorite}
              displayMode="search"
            />
          </section>
        ) : (
          <section className="favorites-section">
            <h2>My Favorite Movies</h2>
            <MovieList
              movies={favorites}
              favorites={favorites}
              loading={false}
              error={null}
              onToggleFavorite={handleToggleFavorite}
              displayMode="favorites"
            />
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
