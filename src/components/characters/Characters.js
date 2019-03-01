import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Character from '../characters/Character';
import { getCharacters } from '../../services/rickAndMortyApi';
import { withPaging } from '../paging/Paging';
import { withFetch } from '../fetch/Fetch';

class Characters extends PureComponent {
  static propTypes = {
    page: PropTypes.number,
    updateTotalPages: PropTypes.func
  };

  static defaultProps = {
    page: 1,
    totalPages: 1
  };

  state = {
    characters: []
  };

  fetchCharacters() {
    //fetch data
    getCharacters(this.props.page)
      .then(res => {
        this.props.updateTotalPages(res.totalPages);
        this.setState({ characters: res.results }); //set state with results

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
    const characterList = this.state.characters.map(character => {
      return (
        <Character key={character.id} character={character} />
      );
    });

    return (
      <ul>
        <li>
          {characterList}
        </li>
      </ul>
    );
  }
}

const FetchCharacters = withFetch(Characters)(getCharacters);
export default withPaging(FetchCharacters);
// export const CharacterWithPaging = withPaging(FetchCharacters);
