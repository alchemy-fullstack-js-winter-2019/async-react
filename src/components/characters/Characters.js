import React, { PureComponent } from 'react';
import Character from './Character';
import  { getCharacters } from '../../services/rickAndMortyApi';

export default class Characters extends PureComponent {
  state = {
    characters: []
  } 
  componentDidMount() {
    getCharacters()
      .then(res => {
        this.setState({ characters: res.results });
      });
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


