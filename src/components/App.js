import React, { Component } from 'react';
import Characters from '../components/characters/Characters';
import { withPaging } from './paging/Paging';

export default class App extends Component {
  constructor(props) {
    super(props);

  }
  state = {
    currentPages: '',
    totalPages: ''
  }

  // handleClickIncrement = () => {
  //   // const { counter } = this.state;
  //   this.setState(state => ({ currentPages: state.currentPages + 1 }));
  
  // };

  // handleClickDecrement = () => {
  //   this.setState(state => ({ currentPages: state.currentPages - 1 }));
  //   console.log('decrement');
  
  // };

  // updateTotalPages = totalPages => { //to be able to pass total pages to other components
  //   this.setState({ totalPages });
  // };


  render() {
    const { currentPage, totalPages } = this.state;
    return (
      <>
      <Paging />
      <Characters 
        page={currentPage}
        updateTotalPages={this.updateTotalPages}
      />,
      </>
    ); 
  }
}


