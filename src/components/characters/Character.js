import React from 'react';
import PropTypes from 'prop-types';

function Character({ character }) {
  const { name, status, species, gender, image } = character;
  
  return (
    <>
      <h2>{name}</h2>
      <p>{species}</p>
      <p>{gender}</p>
      <p>{status}</p>
      <img src={image}></img>
    </>
  );

}

Character.propTypes = {
  character: PropTypes.object.isRequired
};


export default Character;
