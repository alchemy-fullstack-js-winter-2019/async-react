import React, { PureComponent } from 'react';
import Character from './Character';
import  { getCharacters } from '../../services/rickAndMortyApi';
import PropTypes from 'prop-types';

export default class Characters extends PureComponent {
  state = {
    characters: []
  } 
  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    updateTotalPages: PropTypes.func.isRequired
  }
  componentDidMount() {
    getCharacters(this.props.currentPage)
      .then(res => {
        this.setState({ characters: res.results })
          .then(res => {
            this.updateTotalPages(res.totalPages);
          });
      });
  }
  render() {
    const characters = this.state.characters.map(character => {
      return <Character key={character.name} character={character}/>;
    });
    return (
      <ul>
        {characters} 
      </ul>
    );
  }
}


