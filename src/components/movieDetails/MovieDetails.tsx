import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { Movie } from "../../types";
import "./MovieDetails.css";
export const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { movies } = useAppSelector((state) => state.movies);

  const movie: Movie | undefined = movies.find(
    (movie) => movie.id === Number(id)
  );

  if (!movie) {
    return <h2>Movie Not found</h2>;
  }

  const goToHome = () => {
    navigate("/");
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
              <button>Star</button>
              <button>Add to watchlist</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
