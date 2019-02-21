import React, { PureComponent } from 'react';
import Character from './Character';
import { getCharacters } from '../../services/rickAndMortyApi';
import styles from '../css/Characters.css';
import PropTypes from 'prop-types';
import WithPaging from '../Paging';

export class Characters extends PureComponent {

  static propTypes = {
    page: PropTypes.number,
    updateTotalPages: PropTypes.func.isRequired
  }

  static defaultProps = {
    page: 1,

  }

  state = {
    characters: []
  };

  // Call the updateTotalPages function (that was passed as a prop) to notify App what total pages should be inside this fetch function
  fetchCharacters = () => {
    getCharacters(this.props.page)
      .then(res => {
        this.props.updateTotalPages(res.totalPages);
        this.setState({ characters: res.results });
      });
  }

  // initial Api call for characters to load page
  componentDidMount() {
    this.fetchCharacters();
  }

  // only update (call Api again) if the prevProps aren't available
  componentDidUpdate(prevProps) {
    if(prevProps !== this.props.page) {
      this.fetchCharacters();
    }
  }

  render() {
    const listOfChars = this.state.characters.map(char => {
      return (
        <Character 
          key={char.id}
          name={char.name}
          image={char.image}
          status={char.status}
          species={char.species}
          gender={char.gender}
        />
      );
    });

    return (
      <div className={styles.page}>
        {listOfChars}
      </div>
    );
  }
}

export const CharactersWithPaging = WithPaging(Characters);
