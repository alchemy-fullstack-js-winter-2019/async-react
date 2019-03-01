import React, { Component } from 'react';
import CharactersWithPaging from '../components/characters/Characters';
import LocationsWithPaging from '../components/locations/Locations';

export default class App extends Component {

  render() {
    return (
      <>
      <h1>Rick and Morty</h1>
      <CharactersWithPaging />
      <LocationsWithPaging />
      </>
    ); 
  }
}


