import React from 'react';
import PropTypes from 'prop-types';

function Character({ character }) {
  const { name, status, species, gender, image } = character;
  return (
    <ul style={{ listStyle: 'none' }}>
      <a href={character.url} target={'_blank'}>
        <li style={{
          fontWeight: 'bold',
          color: 'rgb(60, 180, 190)',
          textDecoration: 'underline'
        }}>
          {name}
        </li>
      </a>
      <li>Status: {status}</li>
      <li>Species: {species}</li>
      <li>Gender: {gender.toLowerCase()}</li>
      <li>
        <img src={image} style={{ width: '70%' }}/>
      </li>
    </ul>
  );
}

Character.propTypes = {
  character: PropTypes.object.isRequired
};

export default Character;
