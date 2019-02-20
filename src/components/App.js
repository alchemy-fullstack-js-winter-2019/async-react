import React, { Component } from 'react';
import Header from './Header';
import Character from './characters/Character';


export default class App extends Component {
  
  render() {
    const character = {
      name: 'teonna',
      status: 'alive',
      species: 'human',
      gender: 'female'
    };
    return (
      <>
        <Header />
        <Character character={character} />
        <h1>Async React</h1>
      </>
    );
  }
}
