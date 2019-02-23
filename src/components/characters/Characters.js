import React from 'react';
import Character from './Character';
import PropTypes from 'prop-types';

function Characters ({ characters }) {
  const listOfCharacters = characters.map(character => {
    return (
      // eslint-disable-next-line react/jsx-key
      <li key={character.id}>
        <Character character={character} />
      </li>
    );
  });
  return (
    <ul>
      {listOfCharacters}
    </ul>
  );
}

Characters.propTypes = {
  character: PropTypes.array.isRequired
};

export default Characters;
