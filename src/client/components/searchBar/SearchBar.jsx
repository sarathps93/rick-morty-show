import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SearchIcon from '../../assets/svgs/SearchIcon';

const SearchBar = (props) => {
  const { handleNameSearch } = props;
  const [inputValue, setInputValue] = useState('');
  return (
    <div className="searchcontroller--container">
      <form onSubmit={(e) => handleNameSearch(e, inputValue)}>
        <div className="nav-searchbar">
          <label htmlFor="searchbar">
            <input
              type="text"
              id="searchbar"
              placeholder="Please enter a name"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </label>
          <button type="submit">
            <SearchIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  handleNameSearch: PropTypes.func.isRequired,
};

export default SearchBar;
