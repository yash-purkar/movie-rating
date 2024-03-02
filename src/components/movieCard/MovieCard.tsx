import React from "react";
import "./MovieCard.css";
import { Movie } from "../../types";

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="movie_card">
      <img className="movie_image" src={movie.imageURL} alt={movie.title} />
      <h2 className="movie_title  my-05">{movie.title}</h2>
      <p className="movie_description my-05">{movie.summary.split('').slice(0,90)}...</p>
      <div className="movie_actions  my-05">
        <button>Star</button>
        <button>Add to watchlist</button>
      </div>
    </div>
  );
};
