import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './App.css';

export const withPaging = ComponentToPage => {

  class WithPaging extends Component {
    state = {
      currentPage: 1,
      totalPages: 1
    }

    increment = () => {
      const { currentPage, totalPages } = this.state;
      if(currentPage > totalPages - 1) return;
      this.setState(state => ({ currentPage: state.currentPage + 1 }));
    }

    decrement = () => {
      const { currentPage } = this.state;
      if(currentPage < 2) return;
      this.setState(state => ({ currentPage: state.currentPage - 1 }));
    }

    updateTotalPages = whatTotalPagesShouldBe => {
      this.setState({ totalPages: whatTotalPagesShouldBe });
    }
    render() {
      const { currentPage, totalPages } = this.state;
      return (
      <>
        <Paging 
          currentPage={currentPage}
          totalPages={totalPages}
          increment={this.increment}
          decrement={this.decrement}
        />

        <ComponentToPage 
          page={this.state.currentPage} 
          updateTotalPages={this.updateTotalPages} 
          {...this.props}
        />
      </>
      );
    }
  }
  return WithPaging;
};


function Paging({ currentPage, totalPages, increment, decrement }) {
  return (
    <>
       <div className={styles.controls}>
         <p>{currentPage} of {totalPages}</p>
         <button onClick={decrement}>BACK</button>
         <button onClick={increment}>NEXT</button>
       </div>
    </>
  );
}

Paging.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
};
