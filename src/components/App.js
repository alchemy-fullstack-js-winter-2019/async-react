import React, { Component, Fragment } from 'react';
import Header from './Header';
import Characters from './characters/Characters';
import Locations from './locations/Locations';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Locations />
        <Characters />
      </Fragment>
    );
  }
}

export default App;
