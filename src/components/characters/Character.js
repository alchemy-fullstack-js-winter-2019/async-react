import React from 'react';
import PropTypes from 'prop-types';

function Character(character) {
  const { name, status, species, gender } = character;
  return (
    <p>{name}, {status}, {species}, {gender}</p>
  );
}

Character.propTypes = {
  character: PropTypes.object
};

export default Character;
