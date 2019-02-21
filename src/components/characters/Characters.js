import React, {} from 'react';
import Character from './Character';
import { getCharacters } from '../../services/rickAndMortyApi';
import PropTypes from 'prop-types';

export default class Characters extends React.Component {
  state = {
    characters: [] 
  }

  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    updateTotalPages: PropTypes.func.isRequired
  }
  
  componentDidMount() {
    const { currentPage, updateTotalPages } = this.props;
    getCharacters(currentPage)
      .then(response => {
        console.log('RESPONSE', response);
        updateTotalPages(response.totalPages);
        this.setState({ characters: response.results });
      });
  }

  componentDidUpdate(prevProps) {
    if(prevProps.currentPage !== this.props.currentPage) {
      const { currentPage, updateTotalPages } = this.props;
      getCharacters(currentPage)
        .then(response => {
          updateTotalPages(response.totalPages);
          this.setState({ characters: response.results });
        });
    }
  }

  render() {
    const listOfCharacters = this.state.characters.map(character => {
      return <li key={character.id}><Character character={character}/></li>;
    });

    return (
      <ul>
        {listOfCharacters}
      </ul>
    );
  }
}

