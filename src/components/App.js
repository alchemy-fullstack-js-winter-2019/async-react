import React, { Component } from 'react';
import LocationsWithPaging from './locations/Locations';
import CharactersWithPaging from './characters/Characters';   
import 'normalize.css';

export default class App extends Component {

  render() {
    return (
      <>
      <CharactersWithPaging />
      <LocationsWithPaging />
      </>
    );
  }
}


