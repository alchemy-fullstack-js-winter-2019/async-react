import React from 'react';
import PropTypes from 'prop-types';

function Character({ name, status, species, gender, img }) {
  return (
    <>
      <img src={img}/>
      <p>{name}</p>
      <p>Status: {status}</p>
      <p>Species: {species}</p>
      <p>Gender: {gender}</p>
    </>
  );
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string,
  status: PropTypes.string.isRequired,
  species: PropTypes.string,
  gender: PropTypes.string
};

export default Character;
