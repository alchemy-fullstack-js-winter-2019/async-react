import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from '../../css/App.css';

function Character({ character }) {
  const { name, status, species, gender, image } = character;
  return (
    <Fragment>
      <h2>{name}</h2>
      <img src={image}/>
      <div className={styles.info}>
        <p>{status}</p>
        <p>{species}</p>
        <p>{gender}</p>
      </div>
    </Fragment>
  );
}

Character.propTypes = {
  character: PropTypes.object.isRequired
};

export default Character;
