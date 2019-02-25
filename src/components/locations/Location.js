import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function Location({ location }) {
  const { name, dimension, type } = location;
  return (
    <Fragment>
      <p>{name}</p>
      <p>{dimension}</p>
      <p>{type}</p>
    </Fragment>
  );
}

Location.propTypes = { 
  location: PropTypes.object
};

export default Location;
