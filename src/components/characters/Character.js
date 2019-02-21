import React from 'react';
import PropTypes from 'prop-types';

function Character({ character }) {
  const { name, status, species, gender } = character;
  
  return (
    <>
      <h2>{name}</h2>
      <p>{species}</p>
      <p>{gender}</p>
      <p>{status}</p>
    </>
  );

}

Character.propTypes = {
  character: PropTypes.object.isRequired
};


export default Character;
