import React, { Component } from 'react';
import Characters from './characters/Characters';
import Locations from './locations/Locations';
import './App.css';

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

  updateTotalPages = totalPages => {
    this.setState({ totalPages });
  }

  render() {
    const { currentPage, totalPages } = this.state;
    return (
      <>
        <h1>Rick and Mort, Yo!</h1>
        <Characters
          currentPage={currentPage}
          totalPages={totalPages}
          decrement={this.decrement}
          increment={this.increment}
          updateTotalPages={this.updateTotalPages}
        />
        <Locations
          currentPage={currentPage}
          totalPages={totalPages}
          decrement={this.decrement}
          increment={this.increment}
          updateTotalPages={this.updateTotalPages}
        />
      </>
    );
  }
}
