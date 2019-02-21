import React, { Component, Fragment } from 'react';
import Header from './Header';
import Characters from './characters/Characters';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Characters />
      </Fragment>
    );
  }
}

export default App;
