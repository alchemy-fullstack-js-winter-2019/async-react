import React from 'react';
import PropTypes from 'prop-types';

function Character({ name, status, species, gender }) {
  return (
    <tbody>
      <tr>
        <td>{name}</td>
        <td>{species}</td>
        <td>{status}</td>
        <td>{gender}</td>
      </tr>
    </tbody>
  );
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
};

export default Character;
