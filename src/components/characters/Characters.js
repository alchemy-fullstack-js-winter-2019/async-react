import React, { PureComponent, Fragment } from 'react';
// import PropTypes from 'prop-types';
import Character from './Character';
import styles from '../../css/Characters.css';
import { getCharacters } from '../../services/rickAndMortyApi.js';

class Characters extends PureComponent {
  state = {
    characters: []
  }

  componentDidMount() {
    console.log('mounted');
    getCharacters()
      .then(response => {
        console.log(response);
        this.setState({ characters: response.results });
      });
  }
  
  render() {
    const characters = this.state.characters.map(c => {
      return (
        <li key={c.name}><Character character={c} /></li>
      );
    });
    return (
      <Fragment>
        <div className={styles.characters}>
          <h1>Characters!</h1>
          <ul>
            {characters}
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default Characters;
