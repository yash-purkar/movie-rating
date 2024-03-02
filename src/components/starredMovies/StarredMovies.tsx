import React from 'react'
import { useAppSelector } from '../../redux/hooks'
import { Movie } from '../../types';
import { MovieCard } from '../movieCard/MovieCard';

export const StarredMovies = () => {
    const {starredMovies} = useAppSelector(state => state.starred);
console.log(starredMovies)
  return (
    <div className="movies_container">
      <h1 className="all_movies_heading">{starredMovies.length === 0 ? 'No Starred movies found' : 'Starred Movies'}</h1>
      <div className="movies">
        {starredMovies?.map(
          (movie: Movie): React.ReactElement => (
            <MovieCard key={movie.id} movie={movie} />
          )
        )}
      </div>
    </div>
  )
}
