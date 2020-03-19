import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SearchBar from '../../components/searchBar/SearchBar';
import SortAndFilter from '../../components/sortAndFilter/SortAndFilter';
import Pagination from '../../components/pagination/Pagination';
import fetchCharactersData from '../../../redux/actions';
import { sortoptions, paginationButtons } from '../../../../constants';
import { generateSearchUrl } from '../../../utils/functionalUtils';

class SearchControls extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      currentSort: sortoptions.ascending,
      searchParams: {
        name: '',
        species: '',
        gender: '',
      },
    };
    this.handlePageRoute = this.handlePageRoute.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
    this.handleSearchFilterOptions = this.handleSearchFilterOptions.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentSort !== this.state.currentSort) {
      const { info, fetchPageData } = this.props;
      let url;
      switch (this.state.currentSort) {
        case sortoptions.ascending: {
          url = generateSearchUrl(null, null, this.state.searchParams, 1);
          break;
        }
        case sortoptions.descending: {
          url = generateSearchUrl(null, null, this.state.searchParams, info.pages);
          break;
        }
        default: break;
      }
      fetchPageData(url);
    }
  }

  handlePageRoute(e) {
    const { info, fetchPageData } = this.props;
    const { currentPage, searchParams } = this.state;
    const buttonValue = e.target.textContent;

    let nextPage;
    let navigationAllowed = false;
    let url;

    switch (buttonValue) {
      case paginationButtons.next: {
        nextPage = currentPage + 1;
        if (nextPage <= info.pages) {
          navigationAllowed = true;
          url = generateSearchUrl(null, null, searchParams, nextPage);
        }
        break;
      }
      case paginationButtons.previous: {
        nextPage = currentPage - 1;
        if (nextPage > 0) {
          navigationAllowed = true;
          url = generateSearchUrl(null, null, searchParams, nextPage);
        }
        break;
      }
      default: {
        nextPage = Number(buttonValue);
        navigationAllowed = true;
        url = generateSearchUrl(null, null, searchParams, nextPage);
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

  handleSortChange(e) {
    const { currentSort } = this.state;
    const { info } = this.props;
    const sortOption = e.target.value;
    const newPageNumber = sortOption === sortoptions.ascending ? 1 : info.pages;
    if (sortOption !== currentSort) {
      this.setState((state) => ({
        ...state, currentSort: sortOption, currentPage: newPageNumber,
      }));
    }
  }

  handleSearchFilterOptions(e, option, searchVal) {
    const { fetchPageData } = this.props;
    const { searchParams } = this.state;
    const value = !searchVal ? e.target.value : searchVal;
    if (searchVal) e.preventDefault();
    const url = generateSearchUrl(option, value, searchParams, 1);
    const setCurrentPage = () => this.setState((prevState) => ({
      ...prevState, currentPage: 1, searchParams: { ...prevState.searchParams, [option]: value },
    }));
    fetchPageData(url, setCurrentPage);
  }

  render() {
    const { info, userSearchError } = this.props;
    const { currentPage } = this.state;
    const pageCount = info.pages;
    return (
      <div className="searchcontroller--container">
        <SearchBar handleSearchFilterOptions={this.handleSearchFilterOptions} />
        <SortAndFilter
          handleSortChange={this.handleSortChange}
          handleSearchFilterOptions={this.handleSearchFilterOptions}
        />
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
