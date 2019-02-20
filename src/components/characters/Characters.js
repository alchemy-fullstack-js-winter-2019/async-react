import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const results = [
  {
    name: 'Lance',
    gender: 'Male',
    species: 'unknown',
    status: 'alive'
  },
  {
    name: 'Lance2',
    gender: 'Male',
    species: 'unknown',
    status: 'alive'
  },
  {
    name: 'Lance3',
    gender: 'Male',
    species: 'unknown',
    status: 'alive'
  },
  {
    name: 'Lance4',
    gender: 'Male',
    species: 'unknown',
    status: 'alive'
  },
  {
    name: 'Lance5',
    gender: 'Male',
    species: 'unknown',
    status: 'alive'
  }
];

export default class Characters extends PureComponent {
  state = {
    characters: []
  } 
  componentDidMount() {
    this.setState({ characters: results });
  }
  render() {
    const characters = this.state.characters.map(character => {
      return <Character key={character.name} character={character}/>;
    });
    return (
      <ul>
        {characters} 
      </ul>
    );
  }
}


