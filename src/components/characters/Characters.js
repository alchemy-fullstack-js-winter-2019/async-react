import React, { PureComponent, Fragment } from 'react';
import Character from './Character';
import styles from '../../css/Characters.css';
import { getCharacters } from '../../services/rickAndMortyApi.js';
import PropTypes from 'prop-types';
import { withPaging } from '../Paging';
import { withFetch } from '../fetch/Fetch';

class Characters extends PureComponent {
  static propTypes = {
    results: PropTypes.array.isRequired,
  }

  render() {
    const characters = this.props.results.map(c => {
      return (
        <li key={c.id}><Character character={c} /></li>
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

const FetchCharacter = withFetch(Characters)(getCharacters);

export default withPaging(FetchCharacter);
