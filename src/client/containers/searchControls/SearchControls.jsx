import React from 'react';

import SearchBar from '../../components/searchBar/SearchBar';

class SearchControls extends React.PureComponent {
  render() {
    return (
      <div className="searchcontroller--container">
        <SearchBar />
      </div>
    );
  }
}

export default SearchControls;
