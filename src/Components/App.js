import React, { Component } from 'react';
import Characters from './characters/Characters';
import Header from './Header';
import styles from './css/App.css';

export default class App extends Component {
  state = {
    currentPage: 1,
    totalPages: 4,
  }
  updateTotalPages() {

  }
  
  render() {
    return (
      <>
        <Header currentPage={this.state.currentPage} totalPages={this.state.totalPages}/>
        <Characters className={styles} />
      </>
    );
  }
}
