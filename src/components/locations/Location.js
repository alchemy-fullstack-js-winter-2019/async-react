import React from 'react';
import PropTypes from 'prop-types';

function Location({ location }) {
  const { name, type, dimension, created, residents } = location;
  return (
    <ul style={{ listStyle: 'none' }}>
      <a href={location.url} target={'_blank'}>
        <li style={{
          fontWeight: 'bold',
          color: 'rgb(60, 180, 190)',
          textDecoration: 'underline'
        }}>
          {name}
        </li>
      </a>
      <li>{type}</li>
      <li>{dimension}</li>
      <li>
        {new Date(created)
          .toUTCString()
          .split(' ')
          .slice(0, 4)
          .join(' ')}
      </li>
      <li>Residents: {residents.length}</li>
    </ul>
  );
}

Location.propTypes = {
  location: PropTypes.object.isRequired
};

export default Location;
