import React, { Component } from 'react';
import Characters from './characters/Characters';

export default class App extends Component {
  state = {
    currentPage: 1,
    totalPages: 1
  }
  incrementCurrentPage = () => {
    this.setState(state => ({ currentPage: state.currentPage + 1 }));
  };

  decrementCurrentPage = () => {
    this.setState(state => ({ currentPage: state.currentPage - 1 }));
  };

  updateTotalPages = whatTotalPagesShouldBe => {
    this.setState({ totalPages: whatTotalPagesShouldBe });
  };

  render() {
    const { currentPage, totalPages } = this.state;
    return (
      <>
        {currentPage > 1 && <button onClick={this.decrementCurrentPage}>Back</button>}
        <span>{currentPage} / {totalPages}</span>
        {currentPage < totalPages && <button onClick={this.incrementCurrentPage}>Forward</button>}
        <Characters 
          page={currentPage}
          updateTotalPages={this.updateTotalPages}
        />
      </>
    );
  }
}
