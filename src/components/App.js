import React, { Component } from 'react';
import Header from './Header';
import Characters from './characters/Characters';


export default class App extends Component {
  state = {
    currentPage: 1,
    totalPages: 1
  }

  pageForward = () => {
    const { currentPage } = this.state;
    this.setState({ currentPage: currentPage + 1 });
    
  }

  pageBackward = () => {
    const { currentPage } = this.state;
    this.setState({ currentPage: currentPage -  1 });
  }

  updateTotalPages = totalPages => {
    this.setState({ totalPages: totalPages });
  }
  
  render() {
    const { currentPage, totalPages } = this.state;
    return (
      <>
        <Header />
          {currentPage > 1 && <button onClick={this.pageBackward}>BACK</button>}
          <span>{currentPage} of {totalPages}</span>
          {currentPage < totalPages && <button onClick={this.pageForward} >NEXT</button>}
        <Characters 
          page={currentPage}
          updateTotalPages={this.updateTotalPages}
        />
      </>
    );
  }
}
