import React from 'react';
import PropTypes from 'prop-types';

function Location({ location }) {
  const { name, dimension, type } = location;
  return (
    <>
      <p>{name}</p>
      <p>{dimension}</p>
      <p>{type}</p>
    </>
  );
} 

Location.propTypes = {
  location: PropTypes.object.isRequired
};

export default Location;
