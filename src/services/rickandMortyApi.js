import React, { Component } from 'react';
import Characters from '../components/characters/Characters';

export default class App extends Component {
  render() {
    return(
      <Characters />
    );
  }
}

export const getCharacters = () => {
  return Promise.resolve({
    totalPages: 5;
    results
  });
};