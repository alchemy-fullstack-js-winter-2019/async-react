import React, { Component } from 'react';
import Characters from './characters/Characters';

// {/* <h1>Rick &amp; Morty Good Funtime</h1> */}
export default class App extends Component {
  state = {
    currentPage : 1,
    totalPages : 1
  };

  render() {
    const { currentPage, totalPages } = this.state;
    
    return (
      <>
        <span>{currentPage} / {totalPages}</span>
        <Characters page={currentPage}/>
      </>
    ); 
  }
}
