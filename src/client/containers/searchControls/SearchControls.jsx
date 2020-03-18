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

  render() {
    const { info } = this.props;
    const { currentPage } = this.state;
    const pageCount = info.pages;
    return (
      <div className="searchcontroller--container">
        <SearchBar />
        <Pagination currentPage={currentPage} pageCount={pageCount} onPageNav={this.handlePageRoute} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ info: state.info });

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
};

SearchControls.defaultProps = {
  info: {
    next: '',
    prev: '',
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchControls);
