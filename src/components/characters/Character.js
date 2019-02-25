import React from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css'

function Character({ character }) {
    
    const { name, species, gender } = character;
    return (
        <li className={styles.Character}> 
            <p> {name} </p>
            <p> {species} </p>
            <p> {gender} </p>
        </li>
    );
}

Character.propTypes = {
    character: PropTypes.object.isRequired
};

export default Character;
