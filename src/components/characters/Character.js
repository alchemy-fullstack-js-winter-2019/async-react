import React from 'react';
import propTypes from 'prop-types';



function Character({ character }) {
  const { name, status, species, gender } = character;
  return (
    <ul>
      <li>{name}</li>
      <li>{status}</li>
      <li>{species}</li>
      <li>{gender}</li>
    </ul>
  );;
}


Character.propTypes = {
  character: propTypes.object.isRequired
};

export default Character;
