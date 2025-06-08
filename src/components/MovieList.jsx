import MovieCard from "./MovieCard";
import "../styles/MovieList.css";

function MovieList({
  movies,
  favorites,
  loading,
  error,
  onToggleFavorite,
  displayMode,
}) {
  if (loading) {
    return <div className="message">Loading movies...</div>;
  }

  if (error) {
    return <div className="message error">Error: {error}</div>;
  }

  const moviesToDisplay = displayMode === "favorites" ? favorites : movies;

  if (moviesToDisplay.length === 0) {
    if (displayMode === "favorites") {
      return (
        <div className="message">You don't have any favorite movies yet.</div>
      );
    } else {
      return (
        <div className="message">No movies searched. Search for a movie!</div>
      );
    }
  }

  return (
    <div className="movie-list">
      {moviesToDisplay.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          isFavorite={favorites.some((fav) => fav.imdbID === movie.imdbID)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}

export default MovieList;
