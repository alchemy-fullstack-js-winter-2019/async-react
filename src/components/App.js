import React, { Component } from 'react';
import Characters from './characters/';

export default class App extends Component {
  render() {
    return (
      <Characters />
    );
  }
}

export const getCharacters = () => {
  return Promise.resolve({
    totalPages: 25,
    results
  });
};
