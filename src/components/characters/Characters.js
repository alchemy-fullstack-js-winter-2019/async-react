import React, { PureComponent } from 'react';
import Character from './Character';
import { getCharacters } from '../../services/rickAndMortyApi';


class Characters extends PureComponent {
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
        <Character key={character.name} character={character} />
      );
    });
    return (
      <ul>
        {characters}
      </ul>
    );
  }
}


export default Characters;
