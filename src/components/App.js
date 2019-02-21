import React, { Component } from 'react';
import Characters from './characters/Characters';
import styles from './App.css';

class App extends Component {

  state = {
    currentPage: 1,
    totalPages: 1
  };

  updatePageForward = () => {
    const { currentPage, totalPages } = this.state;
    if(currentPage > totalPages - 1) return;
    this.setState({ currentPage: currentPage + 1 });
  }

  updatePageBackward = () => {
    const { currentPage } = this.state;
    if(currentPage < 2) return;
    this.setState({ currentPage: currentPage - 1 });
  }

  updateTotalPages = totalPages => {
    this.setState({ totalPages });
  }


  render() {
    const { currentPage, totalPages } = this.state;

    return (
      <>
        <h1 className={styles.header}>Rick and Morty API</h1>
        <div className={styles.controls}>
          <p>{currentPage} of {totalPages}</p>
          <button onClick={this.updatePageBackward}>BACK</button>
          <button onClick={this.updatePageForward}>NEXT</button>
        </div>
        <Characters page={currentPage} updateTotalPages={this.updateTotalPages}/>
      </>
    );
  }
}

export default App;
