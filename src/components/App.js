import React, { Component } from 'react';
import Header from './Header';
import Characters from './characters/Characters';
import Locations from './locations/Locations';

export default class App extends Component {
  state = {
    location: 'Earth'
  }
  render() {
    return (
      <>
        <Header />
        <div>
          <Characters />
        </div>
        <div>
          <Locations location={location}/>
        </div>
      </>
    );
  }
}


