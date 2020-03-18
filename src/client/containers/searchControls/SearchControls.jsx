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
