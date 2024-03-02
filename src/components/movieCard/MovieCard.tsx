import React from "react";
import "./MovieCard.css";
import { Movie } from "../../types";
import { useNavigate } from "react-router-dom";

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const navigate = useNavigate();

  const handleMovieClick = () => {
    navigate(`/search/${movie.id}`);
  };

  const handleStarClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Preventing the event bubbling concept, bcz if we were clicking on star button it was redirecting to movie details page.
    event.stopPropagation();
  };

  const handleWatchlistClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Preventing the event bubbling concept, bcz if we were clicking on watchlist button it was redirecting to movie details page.
    event.stopPropagation();
  };

  return (
    <div className="movie_card" onClick={handleMovieClick}>
      <img className="movie_image" src={movie.imageURL} alt={movie.title} />
      <h2 className="movie_title  my-05">{movie.title}</h2>
      <p className="movie_description my-05">
        {movie.summary.split("").slice(0, 90)}...
      </p>
      <div className="movie_actions  my-05">
        <button onClick={handleStarClick}>Star</button>
        <button onClick={handleWatchlistClick}>Add to watchlist</button>
      </div>
    </div>
  );
};
