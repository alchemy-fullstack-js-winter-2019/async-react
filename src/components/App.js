import React, { Component } from 'react';
import LocationsWithPaging from './locations/Locations';
import CharactersWithPaging from './characters/Characters';   
import 'normalize.css';
import styles from '../components/css/App.css';

export default class App extends Component {

  render() {
    return (
      <>
      <header className={styles.header}>
        <h1>Rick And Morty</h1>
      </header>
      <div className={styles.pageContainer}>
        <CharactersWithPaging />
        <LocationsWithPaging />
      </div>
      </>
    );
  }
}


