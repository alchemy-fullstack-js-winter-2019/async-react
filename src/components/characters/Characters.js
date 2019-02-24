import React, { PureComponent } from 'react';
import Character from './Character';
import Paging from '../paging/Paging';
import { getCharacters } from '../../services/rickAndMortyApi';
import styles from './Characters.css';

export default class Characters extends PureComponent {
  state = {
    characters: [],
    currentPage: 1,
    totalPages: 1
  }

  fetch = page => {
    getCharacters(page)
      .then(res => {
        this.setState({ characters: res.results, totalPages: res.totalPages });
      });
  }

  componentDidMount() {
    this.fetch(1);
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentPage } = this.state;
    if(prevState.currentPage !== currentPage) {
      this.fetch(currentPage);
    }
  }

  increment = () => {
    let page = this.state.currentPage;

    page === this.state.totalPages ? page = 1 : page++;
    this.setState({ currentPage: page });
  }

  decrement = () => {
    let page = this.state.currentPage;

    page === 1 ? page = this.state.totalPages : page--;
    this.setState({ currentPage: page });
  }

  render() {
    const charactersList = this.state.characters.map(char => {
      return <Character
        key={char.id}
        character={char}
      />;
    });

    const { currentPage, totalPages } = this.state;

    return (
      <div className={styles.characters}>
        <Paging
          currentPage={currentPage}
          totalPages={totalPages}
          decrement={this.decrement}
          increment={this.increment}
        />
        <ul>
          {charactersList}
        </ul>
      </div>
    );
  }
}
