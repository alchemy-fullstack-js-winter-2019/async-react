import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../components/css/App.css';

// Taking a component and returning/rendering that component
export const withPaging = ComponentToPage => {
  class WithPaging extends Component {
    state = {
      currentPage: 1,
      totalPages: 1
    };

    increment = () => {
      this.setState(state => ({ currentPage: state.currentPage }));
    }

    decrement = () => {
      this.setState(state => ({ currentPage: state.currentPage }));
    }

    updateTotalPages = totalPages => {
      this.setState({ totalPages: totalPages });
    }

    render(){
      const { currentPage, totalPages } = this.state;
      return (
        <>
        <ComponentToPage
          page={this.state.currentPage}
          updateTotalPages={this.updateTotalPages}
          {...this.props}/>
          <Paging 
            currentPage={currentPage}
            totalPages={totalPages}
            incrementPage={this.increment}
            decrementPage={this.decrement}
          />
          </>
      );
    }
  }

  return WithPaging;
};

function Paging({ currentPage, totalPages, incrementPage, decrementPage }) {
  return (
    <div className={styles.pageNext}>
      {currentPage < 1 && <button onClick={decrementPage}>&#60;</button>}
      <span>{`${currentPage} / ${totalPages}`}</span>
      {currentPage > totalPages && <button onClick={incrementPage}>&#62;</button>}
    </div>
  );
}
 
Paging.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  incrementPage: PropTypes.func.isRequired,
  decrementPage: PropTypes.func.isRequired
};
