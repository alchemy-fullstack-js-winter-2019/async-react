import React, { Component } from 'react';
import { CharactersWithPaging } from './characters/Characters';
import { LocationsWithPaging } from './location/Locations';


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


