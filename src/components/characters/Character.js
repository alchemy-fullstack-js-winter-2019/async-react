import React from 'react';
import PropTypes from 'prop-types';

function Character({ character }) {
  
  return (
    <>
      <h2>{character.name}</h2>
      <h4>{character.status}</h4>
      <h4>{character.species}</h4>
      <h4>{character.gender}</h4>
    </>
  );
}

Character.propTypes = {
  character: PropTypes.object.isRequired
};

export default Character;
