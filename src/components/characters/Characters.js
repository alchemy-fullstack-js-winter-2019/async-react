import React, {} from 'react';
import Character from './Character';
import { getCharacters } from '../../services/rickAndMortyApi';

export default class Characters extends React.PureComponent {
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
    const listOfCharacters = this.state.characters.map(character => {
      return <li key={character.name}><Character character={character}/></li>;
    });

    return (
      <ul>
        {listOfCharacters}
      </ul>
    );
  }
}

