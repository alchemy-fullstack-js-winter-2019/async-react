import React from 'react';
import PropTypes from 'prop-types';
// import styles from './Location.css';

function Location({ location }) {
  const { name, type, dimension } = location;
  
  return (
    <>
      <div>
        <h2>{name}</h2>
        <p>{type}</p>
        <p>{dimension}</p>
      </div>
    </>
  );

}

Location.propTypes = {
  location: PropTypes.object.isRequired
};


export default Location;
