import React, { Component } from 'react';
import Header from './Header';
import './App.css';
import Characters from './characters/Characters';

export default class App extends Component {
  state = {
    currentPage: 1,
    totalPages: 25
  }

  incrementCurrentPg = () => {
    this.setState(state => ({ currentPage: state.currentPage + 1 }));
  }
  decrementCurrentPg = () => {
    this.setState(state => ({ currentPage: state.currentPage - 1 }));
  }

  render() {
    const { currentPage, totalPages } = this.state;
    return (
      < >
        <Header title={'Async React App'}/>
        {currentPage < totalPages && <button id="next-btn" onClick={this.incrementCurrentPg}>Next</button>}
        <span>{currentPage} of {totalPages}</span>
        {currentPage > 1 && <button id="prev-btn" onClick={this.decrementCurrentPg}>Previous</button>}
        <Characters page={currentPage}/>
      </>
    );
  }
}
