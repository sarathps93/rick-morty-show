import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SearchBar from '../../components/searchBar/SearchBar';
import Pagination from '../../components/pagination/Pagination';
import fetchCharactersData, { baseAPI } from '../../../redux/actions';

class SearchControls extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
    };
    this.handlePageRoute = this.handlePageRoute.bind(this);
    this.handleNameSearch = this.handleNameSearch.bind(this);
  }

  handlePageRoute(e) {
    const { info, fetchPageData } = this.props;
    const { currentPage } = this.state;
    const buttonValue = e.target.textContent;

    let nextPage;
    let navigationAllowed = false;
    let url;

    switch (buttonValue) {
      case 'Next >': {
        nextPage = currentPage + 1;
        if (nextPage <= info.pages) {
          navigationAllowed = true;
          url = info.next;
        }
        break;
      }
      case '< Prev': {
        nextPage = currentPage - 1;
        if (nextPage > 0) {
          navigationAllowed = true;
          url = info.prev;
        }
        break;
      }
      default: {
        nextPage = Number(buttonValue);
        navigationAllowed = true;
        url = `${baseAPI}?page=${nextPage}`;
      }
    }
    const setCurrentPage = () => this.setState({
      currentPage: nextPage,
    });
    if (navigationAllowed) {
      fetchPageData(url, setCurrentPage);
    } else {
      e.preventDefault();
    }
  }

  handleNameSearch(e, string) {
    e.preventDefault();
    const { fetchPageData } = this.props;
    const url = string && `${baseAPI}?name=${string}`;
    const setCurrentPage = () => this.setState({
      currentPage: 1,
    });
    fetchPageData(url, setCurrentPage);
  }

  render() {
    const { info, userSearchError } = this.props;
    const { currentPage } = this.state;
    const pageCount = info.pages;
    return (
      <div className="searchcontroller--container">
        <SearchBar handleNameSearch={this.handleNameSearch} />
        <Pagination
          currentPage={currentPage}
          pageCount={pageCount}
          onPageNav={this.handlePageRoute}
          userSearchError={userSearchError}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ info: state.info, userSearchError: state.userSearchError });

const mapDispatchToProps = (dispatch) => ({
  fetchPageData: (url, updateState) => dispatch(fetchCharactersData(url, updateState)),
});

SearchControls.propTypes = {
  info: PropTypes.shape({
    pages: PropTypes.number.isRequired,
    next: PropTypes.string,
    prev: PropTypes.string,
  }),
  fetchPageData: PropTypes.func.isRequired,
  userSearchError: PropTypes.bool.isRequired,
};

SearchControls.defaultProps = {
  info: {
    next: '',
    prev: '',
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchControls);
