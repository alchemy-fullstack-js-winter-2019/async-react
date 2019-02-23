import React from 'react';
import Character from './Character';
import PropTypes from 'prop-types';

function Characters ({ characters }) {
  const listOfCharacters = characters.map(({ name, species, status, gender }) => {
    return (
      
      // eslint-disable-next-line react/jsx-key
      <li>

      </li>
    );
  });

}
