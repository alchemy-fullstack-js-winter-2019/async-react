import React, { Component } from 'react';
import Header from './Header';
import Characters from './characters/Characters';

export default class App extends Component {
  
  render() {
    return (
      <>
        <Header />
        <Characters />
      </>
    );
  }
}


