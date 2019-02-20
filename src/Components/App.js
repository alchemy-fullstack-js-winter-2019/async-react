import React, { Component } from 'react';
import Character from './characters/Character';
import Characters from './characters/Characters';

export default class App extends Component {
  state = {
    name: '', 
    status: '',
    house: '',
    gender: '',
  }
  render() {
    return (
      <>
        <Character gender={this.state.gender} status={this.state.status} house={this.state.house} name={this.state.name} />
        <Characters />
        <h1> Hello </h1>
      </>
    );
  }
}
