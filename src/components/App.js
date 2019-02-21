import React, { Component } from 'react';
import Header from './Header';
import './App.css';
import Characters from './characters/Characters';

export default class App extends Component {
  render() {
    return (
      < >
        <Header title={'Async React App'}/>
        <Characters />
      </>
    );
  }
}


