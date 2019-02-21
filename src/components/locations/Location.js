import React from 'react';
import PropTypes from 'prop-types';

function Location({ location }) {
  const { name, dimensions, type } = location;
  return (
    <h3>{name}, {dimensions}, {type}</h3>
  );
}

Location.propTypes = {
  location: PropTypes.string.isRequired,
};

export default Location;
