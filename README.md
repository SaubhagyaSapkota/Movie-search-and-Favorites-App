# Movie Search & Favorites App

This is a small React application that allows users to search for movies, view results, and manage a list of their favorite films saved locally in the browser. 

### Features

* **Movie Search:**
* Search movies by name using an input field.
* Fetches movie data form the OMDb API.
* Displays movie posters in a horizontal scrollable list.
  
* **Favorites Management:**
* Addmovies to a list of favorites.
* Remove movies form favroites.
* No duplicate entries allowed.
* **Presistence:** Favorites are saved and retrieved using 'localStorage',
* **Data Retrieval:** Retrieves saved favorites on page load.
* **Responsive UI:** Clean and minimal interface.

### Technologies Used

* **React.js** 
* **javaScripts** 
* **HTML5** 
* **CSS** 
* **OMDb API** (Open Movie Database API)

  ### 🚀 How to Run It Locally

Follow these steps to set up and run the application on your local machine:

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/SaubhagyaSapkota/Movie-search-and-Favorites-App.git
    cd react-movie-app
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    npm install react-icons 
    # OR
    yarn install
    yarn install react-icons
    ```
3.  **Add your OMDb API Key:**
    * Replace your_omdb_api_key_here in App.jsx with your actual key.
    * Visit [http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx) and sign up       to get a free API key.

4.  **Run the App:**
    ```bash
    npm run dev
    # OR
    yarn run dev
    ```
### Folder Structure
src/
├── components/
│   ├── SearchBar.jsx
│   ├── MovieCard.jsx
│   ├── MovieList.jsx
│   └── ToggleButtont.jsx
├── styles/
│   ├── SearchBar.css
│   ├── MovieCard.css
│   ├── MovieList.css
│   └── ToggleButton.css
├── App.jsx
├── App.css
├── index.jsx
└── index.css
