import React, { useMemo } from "react";
import {  useAppSelector } from "../../redux/hooks";
import { MovieCard } from "../movieCard/MovieCard";
import { Movie } from "../../types";
import "./MoviesListing.css";
import { Filters } from "../filters/Filters";

export const MoviesListing = () => {
  const { movies } = useAppSelector((state) => state.movies);
  const { searchQuery, genre, rating, year } = useAppSelector(
    (state) => state.filters
  );
  console.log({searchQuery,genre,rating,year})


  // It will only re-call if searchQuery change.
  const filteredMovies = useMemo(() => {
    let filteredMovies = [...movies];
    // If search query is there search by it.
    if (!!searchQuery) {
      filteredMovies = filteredMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    // If genre filter is there search by it.
    if (!!genre) {
      filteredMovies = filteredMovies.filter((movie) =>
        movie.genre.some((movieGenre) => movieGenre === genre)
      );
    }

    // If year is there search by it.
    if (!!year) {
      filteredMovies = filteredMovies.filter(
        (movie) => movie.year === Number(year)
      );
    }

    // If rating is there search by it.
    if (!!rating) {
      filteredMovies = filteredMovies.filter((movie) => movie.rating < Number(rating));
    }
    return filteredMovies;
  }, [movies, searchQuery, genre, year, rating]);


  return (
    <div className="movies_container">
      <Filters/>
      <h1 className="all_movies_heading">
        {filteredMovies.length === 0 ? "No movies found" : "All Movies"}
      </h1>
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
