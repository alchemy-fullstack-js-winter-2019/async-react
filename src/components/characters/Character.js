import React from 'react';
import PropTypes from 'prop-types';

function Character({ character }) {
  const { name, status, species, gender } = character;
  
  return (

  );

}

Character.propTypes = {
  character: PropTypes.object.isRequired
};

export default Character;