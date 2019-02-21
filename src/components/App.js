import React, { Component } from 'react';
import Characters from './characters/Characters';

export default class App extends Component {
  state = {
    currentPage: 0,
    totalPages: 0
  }
  increaseCount = () => {
    const { currentPage } = this.state;
    this.setState({ currentPage: currentPage + 1 });
  }
  decreaseCount = () => {
    const { currentPage } = this.state;
    this.setState({ currentPage: currentPage - 1 });
  }
  render() {
    const { currentPage, totalPages } = this.state;
    return (
      <>
        <h1>My list of things</h1>
        <button onClick={this.increaseCount}>Next Page</button>
        <button onClick={this.decreaseCount}>Prev Page</button>
        <p>Current page: {currentPage}</p>
        <p>Total pages: {totalPages}</p>
        <Characters/>
      </>
    );
  }
}
