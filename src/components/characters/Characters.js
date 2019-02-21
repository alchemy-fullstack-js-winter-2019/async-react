import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Character from '../characters/Character';
import { getCharacters } from '../../services/rickAndMortyApi';


export default class Characters extends PureComponent {
  static propTypes = {
    page: PropTypes.number,
    updateTotalPages: PropTypes.func.isRequired
  };

  static defaultProps = {
    page: 1
  };

  state = {
    characters: []
  };

  fetchCharacters() {
    //fetch data
    getCharacters(this.props.page)
      .then(response => {
        this.props.updateTotalPages(response.totalPages);
        this.setState({ characters: response.results }); //set state with results

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
        <Character key={character.id} character={character} />
      );
    });

    return (
      <ul>
        <li>
          {characters}
        </li>
      </ul>
    );
  }
}

// exports default withPaging(Characters);
