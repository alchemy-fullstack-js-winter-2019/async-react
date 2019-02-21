import React, { PureComponent } from 'react';
import Character from './Character';
import { getCharacters } from '../../services/rickAndMortyApi';
import PropTypes from 'prop-types';
import styles from './Characters.css';
import { withPaging } from '../paging/Paging';

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
  }
  
  fetchCharacters() {
    getCharacters(this.props.page)
      .then(response => {
        this.setState({ characters: response.results });
        //response.totalPages or ???
        this.props.updateTotalPages(response.totalPages);
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
    const listOfCharacters = this.state.characters.map(character => {
      return <li key={character.id} styles={styles.li}><Character character={character}/></li>;
    });

    return (
      <ul>{listOfCharacters}</ul>
    );
  }
}

export default withPaging(Characters);

