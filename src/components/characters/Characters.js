import React, { PureComponent, Fragment } from 'react';
import Character from './Character';
import styles from '../../css/Characters.css';
import { getCharacters } from '../../services/rickAndMortyApi.js';
import PropTypes from 'prop-types';
import { withPaging } from '../Paging';

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
    const characters = this.state.characters.map(c => {
      return (
        <li key={c.id}><Character character={c} /></li>
      );
    });
    return (
      <Fragment>
        <div className={styles.characters}>
          <h1>Characters!</h1>
          <ul>
            {characters}
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default withPaging(Characters);
