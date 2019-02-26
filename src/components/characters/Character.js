import React from 'react';
import PropTypes from 'prop-types';

function Character({ gender, name, status, species, image }) {
  return (
    <>
      <h2> {name} </h2>
      <h3> {status} </h3>
      <h3> {gender} </h3>
      <h3> {species} </h3>
      <img src={image}></img>
    </>
  );
}


Character.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default Character;
