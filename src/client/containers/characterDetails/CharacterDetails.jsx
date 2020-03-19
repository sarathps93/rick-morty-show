import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import CharacterCards from '../../components/characterCards/CharacterCards';
import SadIcon from '../../assets/svgs/SadIcon';

const CharacterDetailsContainer = (props) => {
  const { characterArray, userSearchError } = props;

  return userSearchError ? (
    <div className="character-search-error">
      <SadIcon />
      <div className="error-text">No results found. Please try an alternate search!!!</div>
    </div>
  ) : (
    <div className="characters-container">
      {
        characterArray.map((character) => <CharacterCards key={character.id} characterDetails={character} />)
      }
    </div>
  );
};

CharacterDetailsContainer.propTypes = {
  characterArray: PropTypes.instanceOf(Array).isRequired,
  userSearchError: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  characterArray: state.results,
  userSearchError: state.userSearchError,
});


export default connect(mapStateToProps)(CharacterDetailsContainer);
