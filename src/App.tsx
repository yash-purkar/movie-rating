import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { MoviesListingPage } from "./pages/moviesListingPage/MoviesListingPage";
import "./utils.css";
import { MovieDetailsPage } from "./pages/MovieDetailsPage/MovieDetailsPage";
import { StarredMovies } from "./components/starredMovies/StarredMovies";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MoviesListingPage />} />
        <Route path="/search/:id" element={<MovieDetailsPage/>} />
        <Route path="/starred" element={<StarredMovies/>}/>
      </Routes>
    </div>
  );
}

export default App;
