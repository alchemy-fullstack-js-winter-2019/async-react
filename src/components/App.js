import React, { Component } from 'react';
import Characters from './characters/Characters';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    currentPage: 1,
    totalPages: 25
  }

  incrementPage = event => {
    event.preventDefault();
    const { currentPage, totalPages } = this.state;
    this.setState({ currentPage: currentPage + 1 }, () => {
      if(currentPage >= totalPages) {
        console.log('hide forward button');
      }
    });
  }

  decrementPage = event => {
    event.preventDefault();
    const { currentPage } = this.state;
    this.setState({ currentPage: currentPage - 1 });
    if(currentPage <= 1) {
      console.log('hide back button');
    }
  }

  render() {
    return (
      <>
      <div>
        <button onClick={this.decrementPage}>&#60;</button>
        <p>{`${this.state.currentPage} / ${this.state.totalPages}`}</p>
        <button onClick={this.incrementPage}>&#62;</button>
      </div>
      <Characters />
      </>
    );
  }
}
