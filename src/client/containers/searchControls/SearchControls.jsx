import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SearchBar from '../../components/searchBar/SearchBar';
import Pagination from '../../components/pagination/Pagination';

class SearchControls extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
    };
  }

  handleNextPageRoute(e) {
    const { info } = this.props;
    const { currentPage } = this.state;
    const nextPage = currentPage + 1;
    if (nextPage <= info.pages) {

    } else {
      e.preventDefault();
    }
  }

  handlePreviousPageRoute(e) {
    const { info } = this.props;
    const { currentPage } = this.state;
    const previousPage = currentPage - 1;
    if (previousPage > 0) {

    } else {
      e.preventDefault();
    }
  }

  handleRandomPageRoute() {

  }

  render() {
    const { info } = this.props;
    const { currentPage } = this.state;
    const pageCount = info.pages;
    return (
      <div className="searchcontroller--container">
        <SearchBar />
        <Pagination currentPage={currentPage} pageCount={pageCount} />
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  fetchPageData: () => dispatch({}),
});

SearchControls.propTypes = {
  info: PropTypes.shape({
    pages: PropTypes.number.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchControls);
