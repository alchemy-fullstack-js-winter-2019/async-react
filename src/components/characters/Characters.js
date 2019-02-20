import React, { PureComponent, Fragment } from 'react';
// import PropTypes from 'prop-types';
import Character from './Character';

class Characters extends PureComponent {
  state = {
    characters: [{
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male'
    },
    {
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human',
      gender: 'Male'
    },
    {
      name: 'Summer Smith',
      status: 'Alive',
      species: 'Human',
      gender: 'Female'
    }]
  }

  componentDidMount() {
    console.log('mounted');
    
  }
  
  render() {
    const characters = this.state.characters.map(c => {
      return (
        <li key={c.name}><Character character={c} /></li>
      );
    });
    return (
      <Fragment>
        <h1>Characters!</h1>
        <ul>
          {characters}

        </ul>
      </Fragment>
    );
  }
}

export default Characters;
