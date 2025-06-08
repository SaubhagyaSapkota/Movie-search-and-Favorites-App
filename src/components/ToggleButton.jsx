import "../styles/ToggleButton.css";

function ToggleButton({ currentMode, onToggle }) {
  return (
    <div className="toggle-container">
      <div className="toggle-search">
        <button
          onClick={() => onToggle("search")}
          className={currentMode === "search" ? "active" : ""}
        >
          All Search Results
        </button>
      </div>
      <div className="toggle-fav">
        <button
          onClick={() => onToggle("favorites")}
          className={currentMode === "favorites" ? "active" : ""}
        >
          My Favorites
        </button>
      </div>
    </div>
  );
}

export default ToggleButton;
