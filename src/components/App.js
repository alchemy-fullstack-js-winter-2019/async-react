import React, { Fragment, PureComponent } from 'react';
import 'normalize-css';
import Header from './header/Header';
import Character from './characters/Character';

export default class App extends PureComponent {
  state = {
    
  }
  render() {
    const character = {
      name: 'Black Widow',
      status: 'alive',
      species: 'human',
      gender: 'female'
    };
    return (
      <Fragment>
        <Header />
        <Character character={character} />
      </Fragment>
    );
  }
}

