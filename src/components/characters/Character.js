import React from 'react';
import PropTypes from 'prop-types';

function Character({ character }) {
  const { name, status, species, gender } = character;
  return (
    <>
      <h2>{name}</h2>
      <h4>{status}</h4>
      <h4>{species}</h4>
      <h4>{gender}</h4>
    </>
  );
}

Character.propTypes = {
  character: PropTypes.object.isRequired
};

export default Character;
