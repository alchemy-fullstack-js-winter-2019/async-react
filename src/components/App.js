import React, { Component } from 'react';
import Header from './Header';
import './App.css';
import Characters from './characters/Characters';
import Paging from './paging/Paging';

export default class App extends Component {
  state = {
    currentPage: 1,
    totalPages: 1
  }

  incrementCurrentPg = () => {
    this.setState(state => ({ currentPage: state.currentPage + 1 }));
  }

  decrementCurrentPg = () => {
    this.setState(state => ({ currentPage: state.currentPage - 1 }));
  }

  updateTotalPages = (whatTotalPgsShouldBe) => {
    this.setState({ totalPages: whatTotalPgsShouldBe });
  }

  render() {
    const { currentPage, totalPages } = this.state;
    return (
      < >
        <Header title={'Async React App'}/>
        <Paging currentPage={currentPage}
          totalPages={totalPages}
          increment={this.incrementCurrentPg}
          decrement={this.decrementCurrentPg}
        />
        <Characters page={currentPage}
          updateTotalPages={this.updateTotalPages}
        />
      </>
    );
  }
}


