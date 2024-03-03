import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Movie } from "../../types";
import "./MovieDetails.css";
import {
  addToStar,
  removeFromStarred,
} from "../../redux/features/starredSlice";
import {
  addToWatchlist,
  removeFromWatchlist,
} from "../../redux/features/watchlistSlice";
export const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { movies } = useAppSelector((state) => state.movies);
  const { starredMovies } = useAppSelector((state) => state.starred);
  const { watchlistMovies } = useAppSelector((state) => state.watchlist);
  const dispatch = useAppDispatch();

  const movie: Movie | undefined = movies.find(
    (movie) => movie.id === Number(id)
  );

  const isStarredMovie = starredMovies.some(
    (starredMovie) => starredMovie.id === movie?.id
  );
  const isWatchlisted = watchlistMovies.some(
    (watchlistMovie) => watchlistMovie.id === movie?.id
  );

  if (!movie) {
    return <h2>Movie Not found</h2>;
  }

  const goToHome = () => {
    navigate("/");
  };

  const handleAddStarClick = () => {
    dispatch(addToStar(movie));
  };
  const handleUnstar = () => {
    dispatch(removeFromStarred(movie.id));
  };

  const handleAddWatchlist = () => {
    dispatch(addToWatchlist(movie));
  };
  const handleRemoveWatchlist = () => {
    dispatch(removeFromWatchlist(movie.id));
  };

  return (
    <>
      <div className="movie_details_go_to_home">
        <button onClick={goToHome}>Go to home</button>
      </div>
      <div className="movie_details_container">
        <div className="movie_details">
          <img
            className="movie_detail_image"
            src={movie.imageURL}
            alt={movie.title}
          />

          <div>
            <div>
              <h2 className="my-05">{movie.title}</h2>
              <p className="my-05">{movie.summary}</p>
            </div>
            <p className="my-05">Year: {movie.year}</p>
            <p className="my-05">
              Genre: {movie.genre.toString().split(",").join(", ")}{" "}
            </p>
            <p className="my-05">Rating: {movie.rating}</p>
            <p className="my-05">Director: {movie.director}</p>
            <p>Writer: {movie.writer}</p>
            <p className="my-05">
              Cast: {movie.cast.toString().split(",").join(", ")}
            </p>
            <div className="movie_details_actions my-05">
              {isStarredMovie ? (
                <button className="button_primary" onClick={handleUnstar}>Unstar</button>
              ) : (
                <button className="button_primary" onClick={handleAddStarClick}>Star</button>
              )}
              {isWatchlisted ? (
                <button className="button_primary" onClick={handleRemoveWatchlist}>
                  Remove from watchlist
                </button>
              ) : (
                <button className="button_primary" onClick={handleAddWatchlist}>Add to watchlist</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
