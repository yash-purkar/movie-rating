import React from 'react'
import './Navbar.css'
import { useAppDispatch } from '../../redux/hooks'
import { setSearchQuery } from '../../redux/features/searchSlice';
export const Navbar = () => {
  const dispatch = useAppDispatch();

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    // Dispatching setSearchQuery action to set the search query, to get this in movieListing page to filter.
    dispatch(setSearchQuery(value));
  }
  return (
    <nav className='navbar'>
      <div className='container'>

      <h1>IMDB</h1>
      <input onChange={handleChange} type="search" name="" id="" className='movie_search_input_lg'/>
      <ul className='pages_links'>
        <li>Movies</li>
        <li>Watched</li>
        <li>Starred</li>
      </ul>
      </div>
      <input onChange={handleChange} type="search" name="" id="" className='movie_search_input_sm'/>
    </nav>
  )
}
