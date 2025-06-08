import "../styles/MovieCard.css";

function MovieCard({ movie, isFavorite, onToggleFavorite }) {
  const imageUrl =
    movie.Poster && movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/150x225?text=No+Poster";
  return (
    <div className="movie-card">
      <img
        src={imageUrl}
        alt={`${movie.Title} poster`}
        className="movie-poster"
      />
      <div className="movie-details">
        <h3>{movie.Title}</h3>
        <p>Year: {movie.Year}</p>
        <button
          onClick={() => onToggleFavorite(movie)}
          className={
            isFavorite ? "favorite-button remove" : "favorite-button add"
          }
          aria-label={
            isFavorite
              ? `Remove ${movie.Title} from favorites`
              : `Add ${movie.Title} to favorites`
          }
        >
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
