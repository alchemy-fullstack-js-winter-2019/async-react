import React from 'react';
import PropTypes from 'prop-types';

function Character({ character }) {
  const { name, status, gender, species } = character;

  return (
    <div>
      <label>{name}</label>
      <label>{gender}</label>
      <label>{species}</label>
      <label>{status}</label>
    </div>
  );
}

Character.propTypes = {
  character: PropTypes.object.isRequired
};

export default Character;
