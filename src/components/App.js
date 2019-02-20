import React, { Fragment, PureComponent } from 'react';
import 'normalize-css';
import '../css/App.css';
import Header from './header/Header';
import Characters from './characters/Characters';

export default class App extends PureComponent {
  state = {
    
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Characters />
      </Fragment>
    );
  }
}

