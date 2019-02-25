import React from 'react';
import PropTypes from 'prop-types';

function Location({ location }) {
  const { name, dimension, type } = location;
  return (
    <>
    <ul>
      <li>{name}</li>
      <li>{dimension}</li>
      <li>{type}</li>
    </ul>
    </>
  );
}

Location.propTypes = {
  location: PropTypes.object.isRequired
};

export default Location;
