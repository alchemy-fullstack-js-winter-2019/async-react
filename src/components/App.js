import React, { PureComponent } from 'react';
import Header from './Header';

export default class App extends PureComponent {
  render() {
    return (
      <>
       <Header />
        <h1> Hello World </h1>
      </>
    )
  }
}