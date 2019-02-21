import React, { Component } from 'react';
import Characters from './characters/Characters';

export default class App extends Component {
  state = {
    currentPage: 1,
    totalPages: 3
  }

  increment = () => {
    let page = this.state.currentPage;

    page === this.state.totalPages ? page = 1 : page++;
    this.setState({ currentPage: page });
  }

  decrement = () => {
    let page = this.state.currentPage;

    page === 1 ? page = this.state.totalPages : page--;
    this.setState({ currentPage: page });
  }

  render() {
    const { currentPage, totalPages } = this.state;
    return (
      <>
        <h1>Yo!</h1>
        <p>Current Page: {currentPage}</p>
        <p>Total Pages: {totalPages}</p>
        <button onClick={this.decrement}>{'<'}</button>
        <button onClick={this.increment}>{'>'}</button>

        <Characters page={currentPage} />
      </>
    );
  }
}
