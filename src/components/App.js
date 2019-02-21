import React, { Component } from 'react';
import Header from './Header';
import Characters from './characters/Characters';
import Paging from './paging/Paging';

export default class App extends Component {
  state = {
    currentPage: 1,
    totalPages: 25
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
        <Paging 
          currentPage={currentPage}
          totalPages = {totalPages}
          pageForward={this.pageForward}
          pageBackward={this.pageBackward}
        />
        <Characters 
          page={currentPage}
          updateTotalPages={this.updateTotalPages}
        />
      </>
    );
  }
}


