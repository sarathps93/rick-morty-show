import React from 'react';

import SearchIcon from '../../assets/svgs/SearchIcon';

const SearchBar = () => (
  <div className="searchcontroller--container">
    <form>
      <div className="nav-searchbar">
        <label htmlFor="searchbar">
          <input type="text" id="searchbar" placeholder="Please enter" />
        </label>
        <button type="submit">
          <SearchIcon />
        </button>
      </div>
    </form>
  </div>
);

export default SearchBar;
