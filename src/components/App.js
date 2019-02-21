import React, { Component } from 'react';
import Header from './Header';
import Characters from './characters/Characters';


export default class App extends Component {
  state = {
    currentPage: 1,
    totalPages: 25
  }

  // this.setSate((state, props) => {
  //   Return { title: state.title + ‘ you’ }
  // })
  

  handleChange = () => {
    const { currentPage, totalPages } = this.state;
    if(currentPage < totalPages) {
      this.setState({ currentPage: currentPage + 1 });

    }
  }
  
  render() {
    const { currentPage, totalPages } = this.state;
    return (
      <>
        <Header />
        <h4>{currentPage}/{totalPages}</h4>
        
        <button>BACK</button>
        <button onClick={this.handleChange} >NEXT</button>
        <Characters />
      </>
    );
  }
};
