import React, { Component } from 'react';
import Characters from './characters/Characters';


export default class App extends Component {
  render() {
    return (
      <>
      <h1>List of things</h1>
      <Characters />
      </>
    );
  }

}
