import React from 'react';
import PropTypes from 'prop-types';

import { getDateDifferenceFromToday } from '../../../utils/functionalUtils';

const CharacterCards = (props) => {
  const { characterDetails } = props;
  const {
    id, name, image, created, status, species, gender, origin, location,
  } = characterDetails;

  const createdDate = getDateDifferenceFromToday(created);

  const characterDetailsObj = {
    status, species, gender, origin: origin.name, 'last location': location.name,
  };

  return (
    <div className="character-cards">
      <div className="character-details-wrapper">
        <img src={image} alt={name} />
        <div className="character-intro">
          <div className="characterName">{name}</div>
          <div className="characterId">{`id: ${id} - created ${createdDate} years ago`}</div>
        </div>
        <div className="character-details">
          {
              Object.keys(characterDetailsObj).map((data) => (
                <React.Fragment key={data}>
                  <div className="details-grid-view">
                    <div className="data-heading">{data.toUpperCase()}</div>
                    <div className="data-value">{characterDetailsObj[data]}</div>
                  </div>
                  <hr />
                </React.Fragment>
              ))
          }
        </div>
      </div>
    </div>
  );
};

CharacterCards.propTypes = {
  characterDetails: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    origin: PropTypes.instanceOf(Object).isRequired,
    location: PropTypes.instanceOf(Object).isRequired,
    image: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
  }).isRequired,
};

export default React.memo(CharacterCards);
