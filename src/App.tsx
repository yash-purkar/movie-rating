import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { MoviesListingPage } from "./pages/moviesListingPage/MoviesListingPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MoviesListingPage />} />
      </Routes>
    </div>
  );
}

export default App;
