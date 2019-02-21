import React, { Component } from 'react';
import Characters from '../components/characters/Characters';

export default class App extends Component {
  constructor(props) {
    super(props);

  }
  state = {
    counter: 1,
    currentPages: '',
    totalPages: ''
  }

  handleClickIncrement = () => {
    // const { counter } = this.state;
    this.setState(state => ({ currentPages: state.currentPages + 1 }));
    console.log('click');
  
  };

  handleClickDecrement = () => {
    // const { counter } = this.state;
    this.setState(state => ({ currentPages: state.currentPages - 1 }));
    console.log('decrement');
  
  };

  updateTotalPages = totalPages => { //to be able to pass total pages to other components
    this.setState({ totalPages });
  }


  render() {
    const { currentPage, totalPages } = this.state;
    return (
      <>
      <Paging
        currentPage={currentPage}
        totalPages={totalPages}
        handleClickIncrement={this.handleClickIncrement}
        handleClickDecrement={this.handleClickDecrement}
      />,
      <Characters 
        page={currentPage}
        updateTotalPages={this.updateTotalPages}
      />,
      </>
    ); 
  }
}


