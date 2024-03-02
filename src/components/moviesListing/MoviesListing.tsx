import React from "react";
import { useAppSelector } from "../../redux/hooks";

export const MoviesListing = () => {
  const {movies} = useAppSelector(state => state.movies);

  return <div>MoviesListing</div>;
};
