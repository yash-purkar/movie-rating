import React from 'react'
import { useAppSelector } from '../../redux/hooks'
import { Movie } from '../../types';
import { MovieCard } from '../movieCard/MovieCard';

export const WatchlistMovies = () => {
    const {watchlistMovies} = useAppSelector(state => state.watchlist);

  return (
    <div className="movies_container">
      <h1 className="all_movies_heading">{watchlistMovies.length === 0 ? 'No movies in Watchlist' : 'Watchlist Movies'}</h1>
      <div className="movies">
        {watchlistMovies?.map(
          (movie: Movie): React.ReactElement => (
            <MovieCard key={movie.id} movie={movie} />
          )
        )}
      </div>
    </div>
  )
}
