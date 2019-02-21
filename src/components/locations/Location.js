import React from 'react';
import PropTypes from 'prop-types';

function Location({ name }) {

  return (
    <h3>{name}</h3>
  );
}

Location.propTypes = {
  location: PropTypes.string.isRequired,
};

export default Location;
