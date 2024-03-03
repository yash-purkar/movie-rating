import React from "react";
import "./Navbar.css";
import { useAppDispatch } from "../../redux/hooks";
import { setFilter } from "../../redux/features/filtersSlice";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
export const Navbar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // If user isn't on home page redirect to home page first.
    if (
      location.pathname.includes("/starred") ||
      location.pathname.includes("/watchlist")
    ) {
      navigate("/");
    }
    const { value } = e.target;
    // Dispatching setSearchQuery action to set the search query, to get this in movieListing page to filter.
    dispatch(setFilter({ filterName: "searchQuery", value }));
  };

  return (
    <nav className="navbar">
      <div className="container">
        <h1>IMDB</h1>
        <input
          onChange={handleChange}
          type="search"
          name=""
          id=""
          className="movie_search_input_lg"
        />
        <ul className="pages_links">
          <li>
            <NavLink to={"/"} className="navlink_item">
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink to={"/watchlist"} className="navlink_item">
              Watchlist
            </NavLink>
          </li>
          <li>
            <NavLink to={"/starred"} className="navlink_item">
              Starred
            </NavLink>
          </li>
        </ul>
      </div>
      <input
        onChange={handleChange}
        type="search"
        name=""
        id=""
        className="movie_search_input_sm"
      />
    </nav>
  );
};
