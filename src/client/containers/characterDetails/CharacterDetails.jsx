import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import CharacterCards from '../../components/characterCards/CharacterCards';

const CharacterDetailsContainer = (props) => {
  const { characterArray } = props;
  return (
    <div className="characters-container">
      {
        characterArray.map(
          (character) => <CharacterCards key={character.id} characterDetails={character} />,
        )
      }
    </div>
  );
};

CharacterDetailsContainer.propTypes = {
  characterArray: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = (state) => ({
  characterArray: state.results,
});


export default connect(mapStateToProps)(CharacterDetailsContainer);
