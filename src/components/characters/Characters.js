import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { getCharacters } from '../../services/rickAndMortyApi';
import { withPaging } from '../paging/Paging';
import styles from './Characters.css';

class Characters extends PureComponent {
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
        <Character key={char.id} character={char}/>
      );
    });
    return (
      <div className={styles.characters}>
        <h2>Characters</h2>
        <br/>
        {characters}
      </div>
    );
  }
}

export default withPaging(Characters);
