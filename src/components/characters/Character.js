import React from 'react';
import PropTypes from 'prop-types';

function Character({ character }) {
    
    const { name, species, gender } = character;
    return (
        <li> 
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
