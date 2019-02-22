import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import '../../css/App.css';

function Location({ location }) {
  const { name, type, dimension } = location;
  return (
    <Fragment>
      <h2>{name}</h2>
      <p>{type} | {dimension}</p>
    </Fragment>
  );
}

Location.propTypes = {
  location: PropTypes.object.isRequired
};

export default Location;
