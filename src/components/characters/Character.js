import React from 'react';
import PropTypes from 'prop-types';

function Character({ gender, name, status, house, img }) {
  return (
    <>
      <h1> {name} </h1>
      <h2> {status} </h2>
      <h2> {gender} </h2>
      <h2> {house} </h2>
      <h2> {img} </h2>
    </>
  );
}


Character.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  house: PropTypes.string.isRequired,
  img: PropTypes.string,
};

export default Character;
