import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function Character({ character }) {
  const { name, status, species, gender } = character;
  return (
    <Fragment>
      <h2>{name}</h2>
      <p>{status}</p>
      <p>{species}</p>
      <p>{gender}</p>
    </Fragment>
  );
}

Character.propTypes = {
  character: PropTypes.object.isRequired
};

export default Character;
