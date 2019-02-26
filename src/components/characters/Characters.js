import React, { PureComponent } from 'react';
import Character from './Character';
// import PropTypes from 'prop-types';
import { getCharacters } from '../services/rickAndMortyApi';

export default class Characters extends PureComponent {
  state = {
    characters: []
  };

  componentDidMount() {
    getCharacters() 
      .then(response => {
        this.setState({ characters: response.results });
      });
  }
  render() {
    const characters = this.state.characters.map(character => {
      return (
        <Character key={character.id} character={character} />
      );
    });
    return (
      <ul>
        {characters}
      </ul>
    );
  }
}
