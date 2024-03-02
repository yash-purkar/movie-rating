import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { MoviesListingPage } from "./pages/moviesListingPage/MoviesListingPage";
import "./utils.css";
import { MovieDetailsPage } from "./pages/MovieDetailsPage/MovieDetailsPage";
import { WatchlistMoviesPage } from "./pages/watchlistMoviesPage/WatchlistMoviesPage";
import { StarredMoviesPage } from "./pages/starredMoviesPage/StarredMoviesPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MoviesListingPage />} />
        <Route path="/search/:id" element={<MovieDetailsPage/>} />
        <Route path="/starred" element={<StarredMoviesPage/>}/>
        <Route path="/watchlist" element={<WatchlistMoviesPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
