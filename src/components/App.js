import React, { Component } from 'react';
import Characters from './characters/Characters';
import Locations from './locations/locations';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <>
        <h1 className={styles.header}>Rick and Morty API</h1>       
        <Characters />
        <Locations />
      </>
    );
  }
}


export default App;
