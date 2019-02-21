import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { getCharacters } from '../services/rickAndMortyApi.js';


export default class Characters extends PureComponent {
  state = {
    characters: []
  }

  static propTypes = {
    characters: PropTypes.array
  };

  componentDidMount() {
    getCharacters()
      .then(response => {
        this.setState({ characters: response.results });
      });
  }

  render() {
    const characters = this.state.characters.map(character => {
      return <Character 
        key={character.name}  
        gender={character.gender}
        name={character.name}
        status={character.status} 
        species={character.species} />;
    });
    return (
        <>
        <ul> 
          <li> {characters} </li>
        </ul>
      </>
    );
  }
}

