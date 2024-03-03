import React, { ChangeEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { clearFilters, setFilter } from '../../redux/features/filtersSlice';
import './Filters.css'
export const Filters = () => {

  const { movies } = useAppSelector((state) => state.movies);
    const dispatch = useAppDispatch();
    const {  genre, rating, year } = useAppSelector(
        (state) => state.filters
      );
    // To get unique array of genres
    const genres = movies.reduce((acc, curr) => {
      curr.genre.forEach((genre) => !acc.includes(genre) && acc.push(genre));
      return acc;
    }, [] as string[]);

    // To get unique array of years
    const years = movies.reduce(
      (acc, curr) => (acc.includes(curr.year) ? acc : [...acc, curr.year]),
      [] as number[]
    );
  const handleFiltersChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    dispatch(
      setFilter({
        filterName: name as "genre" | "year" | "rating",
        value,
      })
    );
  };

  const handleClearFiltersClick  = () => {
    dispatch(clearFilters());
  }
  return (
    <div className="filters">
        <select name="genre" onChange={handleFiltersChange} value={genre} id="">
          <option value='' disabled>All genre</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
        <select
          name="year"
          onChange={handleFiltersChange}
          value={year}
          id=""
        >
          <option value='' disabled>Release Year</option>
          {years.map((year) => (
            <option key={year} value={year.toString()}>
              {year}
            </option>
          ))}
        </select>
        <select
          name="rating"
          onChange={handleFiltersChange}
          value={rating}
          id=""
        >
          <option value='' disabled>Ratings</option>
          {[5, 6, 7, 8, 9,10].map((rating) => (
            <option key={rating} value={rating}>
              Less than {rating}
            </option>
          ))}
        </select>
        <button onClick={handleClearFiltersClick} className='button_primary'>Clear Filters</button>
      </div>
  )
}
