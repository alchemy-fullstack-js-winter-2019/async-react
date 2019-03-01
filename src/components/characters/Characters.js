import React, { PureComponent } from 'react';
import Character from './Character';
import PropTypes from 'prop-types';
import { getCharacters } from '../../../services/rickAndMortyApi';
import { withPaging } from '../paging/Paging';
import { withFetch } from '../fetch/Fetch';

export default class Characters extends PureComponent {
  static propTypes = { 
    page: PropTypes.number,
    updateTotalPages: PropTypes.func.isRequired,
    results: PropTypes.array.isRequired
  };
 
  render() {
    const characters = this.props.results.map(character => {
      return (
        <Character key={character.id} character={character} />
      );
    });
    return (
      <ul>
        {characters}
      </ul>
    );
  }
}

const FetchCharacters = withFetch(Characters)(getCharacters);

export const CharactersWithPaging = withPaging(FetchCharacters);
