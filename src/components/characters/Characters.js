import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { getCharacters } from '../../services/rickAndMortyApi';

export default class Characters extends PureComponent {
  state = {
    characters: [],
    currentPage: 1
  }

  static propTypes = {
    currentPage: PropTypes.number,
    updateTotalPages: PropTypes.func.isRequired
  }

  componentDidMount() {
    getCharacters(1)
      .then(res => {
        this.props.updateTotalPages(res.totalPages);
        this.setState({ characters: res.results });
      });
  }

  componentDidUpdate() {
    console.log('page', this.props.currentPage);
    // getCharacters(this.props.currentPage)
    //   .then(res => this.setState({ characters: res.results }));
  }

  render() {
    const charactersList = this.state.characters.map(char => {
      return <Character key={char.id}
        character={char}
      />;
    });

    return (
      <ul>
        {charactersList}
      </ul>
    );
  }
}
