import React, { Component } from 'react';
import { CharactersWithPaging } from './characters/Characters';
import { LocationsWithPaging } from './location/Locations';
import styles from './css/Characters.css';


export default class App extends Component {
  render() {
    return (
      <>
      <CharactersWithPaging className={styles}/>
      <LocationsWithPaging className={styles}/>
      </>
    );
  }
}


