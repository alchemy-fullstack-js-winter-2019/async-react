import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function Character({ character }) {
  const { name, status, species, gender, image } = character;
  return (
    <Fragment>
      <img src={image} />
      <p><span>Name:</span> {name}</p> 
      <p><span>Status:</span> {status}</p> 
      <p><span>Species:</span> {species}</p> 
      <p><span>Gender:</span> {gender}</p>
    </Fragment>
  );
}

Character.propTypes = {
  character: PropTypes.object
};

export default Character;
