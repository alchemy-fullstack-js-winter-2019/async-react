import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function Character({ character }) {
  const { name, status, species, gender } = character;
  return (
    <Fragment>
      <p>{name}</p> 
      <p>{status}</p> <p>{species}</p> <p>{gender}</p>
    </Fragment>
  );
}

Character.propTypes = {
  character: PropTypes.object
};

export default Character;
