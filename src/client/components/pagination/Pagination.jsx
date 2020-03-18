import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { isPageVisible } from '../../../utils/functionalUtils';

const pagesArray = [];

const Pagination = (props) => {
  const { currentPage, pageCount } = props;

  if (!pagesArray.length) {
    for (let i = 0; i < pageCount; i += 1) {
      pagesArray.push(i + 1);
    }
  }

  return (
    <div className="pagination--container">
      <NavLink to="/sarath">{'< Prev'}</NavLink>
      {
        pagesArray.map((page) => (isPageVisible(page, currentPage)
          ? (
            <NavLink key={page} className={page === currentPage ? 'activePage' : undefined} to="/sarath">
              {page}
            </NavLink>
          )
          : '.'))
      }
      <NavLink to="/sarath">{'Next >'}</NavLink>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
};

export default React.memo(Pagination);
