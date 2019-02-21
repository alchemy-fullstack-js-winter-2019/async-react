import React, { Component, Fragment } from 'react';
import Header from './Header';
import Characters from './characters/Characters';

class App extends Component {
  state = {
    currentPage: 1,
    totalPages: 1
  }

  pageUp = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
  }

  pageDown = () => {
    this.setState({ currentPage: this.state.currentPage - 1 });
  }

  updateTotalPages = totalPages => {
    this.setState({ totalPages });
  }

  render() {
    const { currentPage, totalPages } = this.state;
    return (
      <Fragment>
        <Header />
        {currentPage > 1 && <button onClick={this.pageDown}>Page Down</button>}
        {currentPage}
        {currentPage < totalPages && <button onClick={this.pageUp}>Page Up</button>}
        <Characters 
          page={currentPage}
          updateTotalPages={this.updateTotalPages} />
      </Fragment>
    );
  }
}

export default App;
