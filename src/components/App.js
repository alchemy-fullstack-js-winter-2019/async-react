/* eslint-disable no-console */
import React, { Component } from 'react';
import Characters from './characters/Characters';

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    counter: 1,
    currentPage: 1,
    totalPages: 25
  };
  handleClickIncrement = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 }, () => {
      console.log('Click',);
    });
  };
  handleClickDecrement = () => {
    const { counter } = this.state;
    this.setState({ counter: counter - 1 }, () => {
      console.log('Click',);
    });
  };
  render() {  
    return (
      <>
        <p>CurrentPage {this.state.counter}</p>
        <Characters />
        <button onClick={this.handleClickDecrement}>Previous Page</button>
        <button onClick={this.handleClickIncrement}>Next Page</button>
      </>
    );
  }
}

export default App;

