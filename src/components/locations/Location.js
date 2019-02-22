import React from 'react';
import PropTypes from 'prop-types';

function Location({ location })  {
  return (
    <>
        <h4>{location.name}</h4>
        <h4>{location.dimension}</h4>
    </>
  );
}

Location.propTypes = {
  location: PropTypes.object
};

export default Location;
