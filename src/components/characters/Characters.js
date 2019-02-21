import React, { PureComponent } from 'react';
import Character from './Character';
import { getCharacters } from '../../services/rickAndMortyApi';
import styles from './Characters.css';


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
      <ul className={styles.list}>
        {characters}
      </ul>
    );
  }
}


export default Characters;
