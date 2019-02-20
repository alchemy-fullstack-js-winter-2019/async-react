import React, { Component, Fragment } from 'react';
import Header from './Header';
import Character from './characters/Character';

class App extends Component {

  render() {
    return (
      <Fragment>
        <Header />
        <Character 
          name='Rick Sanchez'
          status='Alive'
          species='Human'
          gender='Male'
        />
      </Fragment>
    );
  }
}

export default App;
