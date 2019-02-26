import React, { Component } from 'react';
import Characters from './characters/Characters';
import Locations from './locations/Locations';

export default class App extends Component {
  state = {
    currentPage : 1,
    totalPages : 10
  };

  incrementCurrentPage = () => {
    this.setState(state => ({ currentPage: state.currentPage + 1 }));
  };

  decrementCurrentPage = () => {
    this.setState(state => ({ currentPage: state.currentPage - 1 }));
  };
  updateTotalPages = updatedTotalPages => {
    this.setState({ totalPages: updatedTotalPages });
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
        <Locations 
          page={currentPage}
          updateTotalPages={this.updateTotalPages}
        />
        
      </>
    ); 
  }
}
