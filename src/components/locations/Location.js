import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function Location({ location }) {
  return (
    <Fragment>
      <p>{location.name}</p>
    </Fragment>
  );
}

Location.propTypes = { 
  location: PropTypes.object
};

export default Location;
