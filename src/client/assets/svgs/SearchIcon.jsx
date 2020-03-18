import React from 'react';
import PropTypes from 'prop-types';

const SearchIcon = (props) => {
  const { height, width } = props;
  return (
    <svg height={height || '32px'} version="1.1" viewBox="0 0 32 32" width={width || '32px'}>
      <g transform="translate(576 192)">
        <path d={`M-544.88-165.121l-7.342-7.342c-1.095,1.701-2.541,3.148-4.242,4.242l7.343,7.342c1.172,1.172,3.071,1.172,4.241,0   
        C-543.707-162.048-543.707-163.947-544.88-165.121z`}
        />
        <path d={`M-552-180c0-6.627-5.373-12-12-12s-12,5.373-12,12s5.373,12,12,12S-552-173.373-552-180z M-564-171c-4.964,0-9-4.036-9-9   
        c0-4.963,4.036-9,9-9c4.963,0,9,4.037,9,9C-555-175.036-559.037-171-564-171z`}
        />
        <path d="M-571-180h2c0-2.757,2.242-5,5-5v-2C-567.86-187-571-183.858-571-180z" />
      </g>
    </svg>
  );
};

SearchIcon.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

SearchIcon.defaultProps = {
  height: '32px',
  width: '32px',
};

export default SearchIcon;
