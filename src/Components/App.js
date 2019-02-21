import React, { Component } from 'react';
import Character from './characters/Character';
import Characters from './characters/Characters';

export default class App extends Component {
  state = {
    name: '', 
    status: '',
    species: '',
    gender: ''
  }
  render() {
    return (
      <>
        <Character gender={this.state.gender} status={this.state.status} species={this.state.species} name={this.state.name} />
        <Characters />
        <h1> Hello </h1>
      </>
    );
  }
}
