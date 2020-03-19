import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SearchIcon from '../../assets/svgs/SearchIcon';
import {
  searchfilterOptions,
} from '../../../../constants';

const SearchBar = (props) => {
  const { handleSearchFilterOptions } = props;
  const [inputValue, setInputValue] = useState('');
  return (
    <div className="searchcontroller--container">
      <form onSubmit={(e) => handleSearchFilterOptions(e, searchfilterOptions.name, inputValue)}>
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
  handleSearchFilterOptions: PropTypes.func.isRequired,
};

export default SearchBar;
