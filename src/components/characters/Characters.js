import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getCharacters } from '../../services/rickAndMortyApi';
import Character from '../characters/Character';
import { withPaging } from '../paging/Paging';
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
      <table>
        <tbody>
          {characters}
        </tbody>
      </table>
    );
  }
}

const FetchCharacters = withFetch(Characters)(getCharacters);

export const CharactersWithPaging = withPaging(FetchCharacters);
