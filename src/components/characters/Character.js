import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function Character({ character }) {
  const { name, status, species, gender } = character;
  return (
    <Fragment>
      {name}, {status}, {species}, {gender}
    </Fragment>
  );
}

Character.propTypes = {
  character: PropTypes.object
};

export default Character;
