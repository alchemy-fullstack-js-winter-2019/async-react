import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { getCharacters } from '../../services/rickAndMortyApi';

export default class Characters extends PureComponent {
  static propTypes = {
    page: PropTypes.number,
    updateTotalPages: PropTypes.func.isRequired
  };

  static defaultProps = {
    page: 1
  }

  state = {
    characters: []
  }

  fetchCharacters = () => {
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
    const characters = this.state.characters.map(char => {
      return (
        <Character key={char.name} character={char}/>
      );
    });
    return (
      <div>
        {characters}
      </div>
    );
  }
}
