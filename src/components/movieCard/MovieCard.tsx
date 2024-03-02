import React from "react";
import "./MovieCard.css";
import { Movie } from "../../types";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToStar } from "../../redux/features/starredSlice";
import { addToWatchlist } from "../../redux/features/watchlistSlice";

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {starredMovies} = useAppSelector(state => state.starred);
  const {watchlistMovies} = useAppSelector(state => state.watchlist);

  const isStarred = starredMovies.some((starredMovie) => starredMovie.id === movie.id);
  const isWatchlisted = watchlistMovies.some((watchlistMovie) => watchlistMovie.id === movie.id);


  const handleMovieClick = () => {
    navigate(`/search/${movie.id}`);
  };

  const handleStarClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Preventing the event bubbling concept, bcz if we were clicking on star button it was redirecting to movie details page.
    event.stopPropagation();

    dispatch(addToStar(movie));
  };

  const handleWatchlistClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Preventing the event bubbling concept, bcz if we were clicking on watchlist button it was redirecting to movie details page.
    event.stopPropagation();
    dispatch(addToWatchlist(movie));
  };

  return (
    <div className="movie_card" onClick={handleMovieClick}>
      <img className="movie_image" src={movie.imageURL} alt={movie.title} />
      <h2 className="movie_title  my-05">{movie.title}</h2>
      <p className="movie_description my-05">
        {movie.summary.split("").slice(0, 90)}...
      </p>
      <div className="movie_actions  my-05">
        <button disabled={isStarred} onClick={handleStarClick} className={`${isStarred && 'btn_disabled'}`}>Star</button>
        <button disabled={isWatchlisted}  onClick={handleWatchlistClick} className={`${isWatchlisted && 'btn_disabled'}`}>Add to watchlist</button>
      </div>
    </div>
  );
};
