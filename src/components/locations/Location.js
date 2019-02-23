import React from 'react';
import PropTypes from 'prop-types';

function Location({ location }) {
  const { name, dimension, type } = location;
  return (
    <div>
      <label>{name}</label>
      <label>{dimension}</label>
      <label>{type}</label>
    </div>
  );
}

Location.propTypes = {
  location: PropTypes.object.isRequired
};

export default Location;
