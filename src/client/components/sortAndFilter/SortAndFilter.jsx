import React from 'react';
import PropTypes from 'prop-types';

import {
  sortoptions, genderOptions, speciesOptions, searchfilterOptions,
} from '../../../../constants';

const SortAndFilter = (props) => (
  <div className="sort-option-container">
    <label htmlFor="sort-option">
      Sort By
      <select id="sort-option" onChange={props.handleSortChange}>
        <option value={sortoptions.ascending}>{sortoptions.ascending}</option>
        <option value={sortoptions.descending}>{sortoptions.descending}</option>
      </select>
    </label>
    <label htmlFor="gender-filter">
      Gender
      <select id="gender-filter" onChange={(e) => props.handleSearchFilterOptions(e, searchfilterOptions.gender)}>
        <option hidden>Please select...</option>
        <option value={genderOptions.male}>{genderOptions.male}</option>
        <option value={genderOptions.female}>{genderOptions.female}</option>
      </select>
    </label>
    <label htmlFor="species-filter">
      Species
      <select id="species-filter" onChange={(e) => props.handleSearchFilterOptions(e, searchfilterOptions.species)}>
        <option hidden>Please select...</option>
        {
          Object.values(speciesOptions).map((value) => (
            <option key={value} value={value}>{value}</option>
          ))
        }
      </select>
    </label>
    <a href="/">Clear all filters</a>
  </div>
);

SortAndFilter.propTypes = {
  handleSortChange: PropTypes.func.isRequired,
  handleSearchFilterOptions: PropTypes.func.isRequired,
};

export default SortAndFilter;
