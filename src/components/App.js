import React, { Fragment, PureComponent } from 'react';
import 'normalize-css';
import '../css/App.css';
import Header from './header/Header';
import Characters from './characters/Characters';

export default class App extends PureComponent {
  state = {
    currentPage: '',
    totalPages: ''
  }

  render() {
    return (
      <Fragment>
        <Header />
        <button>Back</button>
        <p>{this.state.currentPage} / {this.state.totalPages}</p>
        <button>Forward</button>
        <Characters />
      </Fragment>
    );
  }
}

