import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
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

  
  fetchCharacters = (page) => {
    getCharacters(page)
      .then(response => {
        this.props.updateTotalPages(response.totalPages);
        this.setState({ characters: response.results });   
      });
  };
  
  componentDidMount() {
    this.fetchCharacters(1);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.page !== this.props.page) {
      this.fetchCharacters(this.props.page);
    }
  }	  

  render() {
    const characters = this.state.characters.map(character => {
      return (
        <Character key={character.id} character={character} />
      );
    });
    return (

      <table>
        <tbody>
          {characters}
        </tbody>
      </table>
    );
  }
}
