import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/Character.css';

function Character({ name, image, status, species, gender }) {
  return (
    <div className={styles.char}>
      <h3>{name}</h3>
      <img src={image}></img>
      <p>{species} - {status} - {gender}</p>
    </div>
  );
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
};

export default Character;
