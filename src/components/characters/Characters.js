import React, { PureComponent } from 'react';
import Character from './Character';
import PropTypes from 'prop-types';
import { getCharacters } from '../services/rickAndMortyApi';
import { withPaging } from '../paging/Paging';
import { withFetch } from '../fetch/Fetch';

export default class Characters extends PureComponent {
  static propTypes = { 
    page: PropTypes.number,
    updateTotalPages: PropTypes.func.isRequired
  };
  state = {
    characters: []
  };
  fetchCharacters = () => {
    getCharacters(this.props.page) 
      .then(response => {
        this.props.updateTotalPages(response.totalPages);
        this.setState({ characters: response.results });
      });
  };
   

  componentDidMount() {
    this.fetchCharacters();
  }
  render() {
    const characters = this.state.characters.map(character => {
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
