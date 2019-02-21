import React from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';

function Character({ character }) {
  const { name, status, species, gender, image } = character;
  
  return (
    <>
      <div className={styles.card}>
        <h2>{name}</h2>
        <p>{species}</p>
        <p>{gender}</p>
        <p>{status}</p>
        <img src={image}></img>
      </div>
    </>
  );

}

Character.propTypes = {
  character: PropTypes.object.isRequired
};


export default Character;
