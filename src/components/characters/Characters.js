import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { getCharacters } from '../../services/rickAndMortyApi';

export default class Characters extends PureComponent {
  state = {
    characters: []
  }

  componentDidMount() {
    getCharacters()
      .then(response => {
        this.setState({ characters: response.results });
      });
  }

  render() {
    const characters = this.state.characters.map(char => {
      return (
        <Character key={char.name} character={char}/>
      );
    });
    return (
      <div>
        {characters}
      </div>
    );
  }
}
