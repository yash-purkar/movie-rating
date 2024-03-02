import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { MovieCard } from "../movieCard/MovieCard";
import { Movie } from "../../types";
import './MoviesListing.css'

export const MoviesListing = () => {
  const { movies } = useAppSelector((state) => state.movies);

  return (
    <div className="movies_container">
      <div className="movies">
        {movies.map(
          (movie: Movie): React.ReactElement => (
            <MovieCard key={movie.id} movie={movie} />
          )
        )}
      </div>
    </div>
  );
};
