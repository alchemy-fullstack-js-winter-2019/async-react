import React, { PureComponent } from 'react';
import Character from './Character';
import { getCharacters } from '../../services/rickAndMortyApi';

export default class Characters extends PureComponent {
  state = {
    characters: []
  }

  componentDidMount() {
    getCharacters()
      .then(res => this.setState({ characters: res.results }));
  }

  render() {
    const charactersList = this.state.characters.map(char => {
      return <Character key={char.name}
        character={char}
      />;
    });

    return (
      <ul>
        {charactersList}
      </ul>
    );
  }
}
