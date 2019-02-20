import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const results = [
  {
    name: 'Jon', 
    status: 'Alive',
    house: 'N/A',
    gender: 'male'
  },
  {
    name: 'Sansa', 
    status: 'Alive',
    house: 'Stark',
    gender: 'female'
  }
];


export default class Characters extends PureComponent {
  state = {
    characters: []
  }

  static propTypes = {
    characters: PropTypes.array
  };

  componentDidMount() {
    this.setState({ characters: results });
  }
  render() {
    const characters = this.state.characters.map(character => {
      return <Character 
        key={character.name}  
        gender={character.gender} 
        name={character.name} 
        house={character.house} 
        status={character.status}/>;
    });
    return (
        <>
        <ul> 
          <li> {characters} </li>
        </ul>
      </>
    );
  }
}

