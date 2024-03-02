import React from 'react'
import './Navbar.css'
export const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='container'>

      <h1>IMDB</h1>
      <input type="search" name="" id="" className='movie_search_input_lg'/>
      <ul className='pages_links'>
        <li>Movies</li>
        <li>Watched</li>
        <li>Starred</li>
      </ul>
      </div>
      <input type="search" name="" id="" className='movie_search_input_sm'/>
    </nav>
  )
}
