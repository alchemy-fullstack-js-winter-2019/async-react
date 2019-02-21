import React, { PureComponent } from 'react';
import Character from './Character';
import { getCharacters } from '../../services/rickAndMortyApi';
import styles from './Characters.css';
import PropTypes from 'prop-types';


class Characters extends PureComponent {
  static propTypes = {
    page: PropTypes.number,
    updateTotalPages: PropTypes.func.isRequired
  }

  static defaultProps = {
    page: 1
  }

  state = {
    characters: []
  };

  fetchCharacters = () => {
    getCharacters(this.props.page)
      .then(response => {
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
      return (
        <Character key={character.name} character={character} />
      );
    });
    return (
      <ul className={styles.list}>
        {characters}
      </ul>
    );
  }
}


export default Characters;
