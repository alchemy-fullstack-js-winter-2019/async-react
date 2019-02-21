import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { getCharacters } from '../../services/rickAndMortyApi';
import { withPaging } from '../paging/Paging';


export class Characters extends PureComponent {
  static propTypes = {
    page: PropTypes.number,
    updateTotalPages: PropTypes.func
  };

  static defaultProps ={
    page: 1
  };

  state = {
    characters: []
  };

  fetchCharacters = () => {
    console.log('props', this.props.updateTotalPages);
    getCharacters(this.props.page)
      .then(response => {
        this.props.updateTotalPages(response.totalPages);
        this.setState({ characters: response.results });
      });
  }
  componentDidMount() {
    this.fetchCharacters();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.page !== this.props.page) {
      this.fetchCharacters();
    }
  }
  render() {
    const characters = this.state.characters.map(character => {
      return <li key={character.id}> <Character 
        gender={character.gender}
        name={character.name}
        status={character.status} 
        species={character.species}
        image={character.image}/> </li>;
    });
    return (
        <>
        <ul> 
          {characters}
        </ul>
      </>
    );
  }
}

export const CharactersWithPaging = withPaging(Characters);
