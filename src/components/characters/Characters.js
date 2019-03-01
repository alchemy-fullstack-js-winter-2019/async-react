import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withPaging } from '../paging/Paging';
import { getCharacters, getLocations } from '../../services/__mocks__/rickAndMortyApi';
import Character from './Character';
import { withFetch } from '../fetch/Fetch';

export class Characters extends PureComponent {
  static propTypes = {
    results: PropTypes.array.isRequired
  };

  render() {
    const characters = this.props.results.map(character => {
      return (
        <Character key={character.id} character={character} />
      );
    });
    return (
      <div>
        {characters}
      </div>
    );
  }
}

const FetchCharacters = withFetch(Characters)(getCharacters);

export const CharactersWithPaging = withPaging(FetchCharacters);
