import React, { Component } from 'react';
import Characters from './characters/Characters';
import Locations from './locations/Locations';


export default class App extends Component {
  state = {
    currentPage: 1,
    totalPages: null
  }
  increaseCount = () => {
    const { currentPage, totalPages } = this.state;
    if(currentPage === totalPages) return;
    this.setState({ currentPage: currentPage + 1 });
  }
  decreaseCount = () => {
    const { currentPage } = this.state;
    if(currentPage === 1) return;
    this.setState({ currentPage: currentPage - 1 });
  }
  updateTotalPages = pages => {
    this.setState({ totalPages: pages });
  }
  render() {
    return (
      <>
        <h1>My list of things</h1>
        <Characters
          updateTotalPages={this.updateTotalPages}
          increaseCount={this.increaseCount}
          decreaseCount={this.decreaseCount}
        />
        <Locations 
          updateTotalPages={this.updateTotalPages}
          increaseCount={this.increaseCount}
          decreaseCount={this.decreaseCount}
        />
      </>
    );
  }
}
