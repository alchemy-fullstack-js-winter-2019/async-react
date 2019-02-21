import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getCharacters } from '../../services/rickAndMortyApi';
import Character from './Character';

export default class Characters extends PureComponent {
  static PropTypes = {
    page: PropTypes.number,
    updateTotalPAges: PropTypes.func.isRequired
  };

  static defaultProps = {
    page: 1
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

  componentDidUpdate(prevProps) {
    if(prevProps.apge !== this.props.page) {
      this.fetchCharacters();
    }
  }

  render() {
    const characters = this.state.characters.map(character => {
      return (
        <Character key={character.id} character={character} />
      );
    });
    return (
      
    );
  }
}
