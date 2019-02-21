import React, { PureComponent } from 'react';
import Character from './Character';
import { getCharacters } from '../../services/rickAndMortyApi';
import styles from './Characters.css';

export default class Characters extends PureComponent {
  state = { 
    characters: []
  }
  
  componentDidMount(){
    getCharacters()
      .then(response => {
        this.setState({ characters: response.results });

      });
  }

  render() {
    const listOfCharacters = this.state.characters.map(character => {
      return <li key={character.name} styles={styles.li}><Character character={character}/></li>;
    });

    return (
      <ul>{listOfCharacters}</ul>
    );
  }
}
