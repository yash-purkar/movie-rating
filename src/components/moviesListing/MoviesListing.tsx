import React, { useMemo } from "react";
import { useAppSelector } from "../../redux/hooks";
import { MovieCard } from "../movieCard/MovieCard";
import { Movie } from "../../types";
import "./MoviesListing.css";

export const MoviesListing = () => {
  const { movies } = useAppSelector((state) => state.movies);
  const { searchQuery } = useAppSelector((state) => state.searchQuery);
  console.log("se")

  // It will only re-call if searchQuery change.
  const filteredMovies = useMemo(() => {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [movies, searchQuery]);

  return (
    <div className="movies_container">
      <h1 className="all_movies_heading">{filteredMovies.length === 0 ? 'No movies found' : 'All Movies'}</h1>
      <div className="movies">
        {filteredMovies?.map(
          (movie: Movie): React.ReactElement => (
            <MovieCard key={movie.id} movie={movie} />
          )
        )}
      </div>
    </div>
  );
};
