import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import Paging from '../paging/Paging';
import { getCharacters } from '../../services/rickAndMortyApi';
import './Characters.css';

export default class Characters extends PureComponent {
  state = {
    characters: [],
    currentPage: 1
  }

  static propTypes = {
    currentPage: PropTypes.number,
    totalPages: PropTypes.number,
    decrement: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired,
    updateTotalPages: PropTypes.func.isRequired
  }

  componentDidMount() {
    getCharacters(1)
      .then(res => {
        this.props.updateTotalPages(res.totalPages);
        this.setState({ characters: res.results });
      });
  }

  componentDidUpdate(prevProps) {
    const { currentPage } = this.props;
    if(prevProps.currentPage !== currentPage) {
      getCharacters(this.props.currentPage)
        .then(res => this.setState({ characters: res.results }));
    }
  }

  render() {
    const charactersList = this.state.characters.map(char => {
      return <Character
        key={char.id}
        character={char}
      />;
    });

    const { currentPage, totalPages, increment, decrement } = this.props;

    return (
      <>
        <Paging
          currentPage={currentPage}
          totalPages={totalPages}
          decrement={decrement}
          increment={increment}
        />
        <ul>
          {charactersList}
        </ul>
      </>
    );
  }
}
