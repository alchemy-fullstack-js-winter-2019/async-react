import React, { Component } from 'react';
import Characters from './characters/Characters';
import Locations from './locations/Locations';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <>
        <h1>Rick and Mort, Yo!</h1>
        <Characters />
        <Locations />
      </>
    );
  }
}
