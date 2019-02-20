import React from 'react';
import PropTypes from 'prop-types';

function Character({ character }) {
  return (
    <h2 character={character}>Character component</h2>
  );
}

Character.propTypes = {
  character: PropTypes.object.isRequired
};

export default Character;
