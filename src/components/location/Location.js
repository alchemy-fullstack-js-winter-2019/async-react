import React from 'react';
import PropTypes from 'prop-types';

function Location({ location }) {
  const { name, dimension, type } = location;

  return (
    <>
    <h2> {name} </h2>
    <h2> {dimension} </h2>
    <h2> {type} </h2>
    </>
  );
}

Location.propTypes = {
  location: PropTypes.object.isRequired
};

export default Location;
