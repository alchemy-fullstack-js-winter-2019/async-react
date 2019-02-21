import React, { PureComponent } from 'react';
import Character from './Character';
import  { getCharacters } from '../../services/rickAndMortyApi';
import PropTypes from 'prop-types';
import Paging from '../paging/Paging';

export default class Characters extends PureComponent {
  state = {
    characters: [],
    currentPage: 1,
    totalPages: null
  } 
  static propTypes = {
    updateTotalPages: PropTypes.func.isRequired,
    increaseCount: PropTypes.func.isRequired,
    decreaseCount: PropTypes.func.isRequired
  }
  componentDidMount() {
    getCharacters(this.state.currentPage)
      .then(res => this.setState({ characters: res.results }, () => {
        this.props.updateTotalPages(res.totalPages);
      }));
  }
  componentDidUpdate() {
    getCharacters(this.state.currentPage)
      .then(res => this.setState({ characters: res.results }, () => {
        this.props.updateTotalPages(res.totalPages);
      }));
  }
  render() {
    const characters = this.state.characters.map(character => {
      return <Character key={character.id} character={character}/>;
    });
    const { currentPage, totalPages } = this.state;
    return (
      <>
        <Paging 
          currentPage={currentPage}
          totalPages={totalPages}
          increaseCount={this.increaseCount}
          decreaseCount={this.decreaseCount}
        />
        <ul>
          {characters} 
        </ul>
      </>
    );
  }
}


