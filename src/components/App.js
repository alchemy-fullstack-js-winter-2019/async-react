import React, { Component, Fragment } from 'react';
import Header from './Header';
import Characters from './characters/Characters';
import { LocationsWithPaging } from './locations/Locations';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <LocationsWithPaging />
        <Characters />
      </Fragment>
    );
  }
}

export default App;
