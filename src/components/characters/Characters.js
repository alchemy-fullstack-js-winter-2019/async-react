import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { getCharacters } from '../services/rickAndMortyApi.js';
import styles from '../css/Characters.css';


export default class Characters extends PureComponent {
  state = {
    characters: []
  }

  static propTypes = {
    characters: PropTypes.array,
    currentPage: PropTypes.array
  };

  componentDidMount() {
    getCharacters()
      .then(response => {
        this.setState({ characters: response.results });
      });
  }

  render() {
    const characters = this.state.characters.map(character => {
      return <li key={character.name}> <Character 
        gender={character.gender}
        name={character.name}
        status={character.status} 
        species={character.species}
        image={character.image}/> </li>;
    });
    return (
        <>
        <ul className={styles}> 
          {characters}
        </ul>
      </>
    );
  }
}

