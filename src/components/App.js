import React, { Component } from 'react';
import Characters from './characters/Characters';
export default class App extends Component {
  state = {
    currentPage: 1,
    totalPages: 3
  };
  render() {
    return <h1>Types of characters</h1>;
  }
}
