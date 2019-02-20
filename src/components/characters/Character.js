import React from 'react';
import PropTypes from 'prop-types';

function Character({ character }) {
  const { name, status, species, gender} = character;
  return(
    <>
    <p>{name}</p>
    <p>{status}</p>
    <p>{species}</p>
    <p>{gender}</p>
    </>
  );
}

Character.propTypes = {
  character: PropTypes.object.isRequired,
}

export default Character;