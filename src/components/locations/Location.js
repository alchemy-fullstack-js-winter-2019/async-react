import React from 'react';
import PropTypes from 'prop-types';

function Location({ name, dimension, type }) {
  return (
    <>
    <h3>{name}</h3>
    <p>Dimension: {dimension}, Type: {type}</p>
    </>
  );
}

Location.propTypes = {
  name: PropTypes.string.isRequired,
  dimension: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Location;
