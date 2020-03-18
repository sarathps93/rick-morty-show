/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

import { isPageVisible } from '../../../utils/functionalUtils';

const pagesArray = [];

const Pagination = (props) => {
  const { currentPage, pageCount, onPageNav } = props;

  if (!pagesArray.length) {
    for (let i = 0; i < pageCount; i += 1) {
      pagesArray.push(i + 1);
    }
  }

  return (
    <div className="pagination--container">
      <a role="button" tabIndex="0" onClick={onPageNav}>{'< Prev'}</a>
      {
        pagesArray.map((page) => (isPageVisible(page, currentPage)
          ? (
            <a
              key={page}
              className={page === currentPage ? 'activePage' : undefined}
              role="button"
              tabIndex="0"
              onClick={onPageNav}
            >
              {page}
            </a>
          )
          : '.'))
      }
      <a role="button" tabIndex="0" onClick={onPageNav}>{'Next >'}</a>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  onPageNav: PropTypes.func.isRequired,
};

export default React.memo(Pagination);
