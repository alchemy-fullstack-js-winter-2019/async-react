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
      this.setState(state => ({ currentPage: state.currentPage + 1 }));
    }

    decrement = () => {
      this.setState(state => ({ currentPage: state.currentPage - 1 }));
    }

    updateTotalPages = totalPages => {
      this.setState({ totalPages: totalPages });
    }

    render(){
      const { currentPage, totalPages } = this.state;
      return (
        <>
        <Paging 
          currentPage={currentPage}
          totalPages={totalPages}
          incrementPage={this.increment}
          decrementPage={this.decrement}
        />
        <ComponentToPage
          page={this.state.currentPage}
          updateTotalPages={this.updateTotalPages}
          {...this.props}/>
          
          </>
      );
    }
  }

  return WithPaging;
};

function Paging({ currentPage, totalPages, incrementPage, decrementPage }) {
  return (
    <div className={styles.pageNext}>
      <button onClick={decrementPage}>&#60;</button>
      <span>{`${currentPage} / ${totalPages}`}</span>
      <button onClick={incrementPage}>&#62;</button>
    </div>
  );
}
 
Paging.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  incrementPage: PropTypes.func.isRequired,
  decrementPage: PropTypes.func.isRequired
};

export default Paging;
