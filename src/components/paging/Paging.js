import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const withPaging = ComponentToPage => {
  class WithPaging extends Component {
    state = {
      currentPage: 1,
      totalPages: 1
    };

    handleClickIncrement = () => {
      this.setState(state => ({ currentPage: state.currentPage + 1 }));
    };

    handleClickDecrement = () => {
      this.setState(state => ({ currentPage: state.currentPage - 1 }));
    };

    updateTotalPages = totalPages => {
      this.setState({ totalPages });
    };

    render() {
      const { currentPage, totalPages } = this.state;
      return (
        <>
          <Paging 
            currentPage={currentPage}
            totalPages={totalPages}
            increment={this.handleClickIncrement}
            decrement={this.handleClickDecrement}
          />
          <ComponentToPage
            page={currentPage}
            updatedTotalPages={this.updateTotalPages}
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
    {currentPage > 1 && <button onClick={decrement}>Back</button>}
    <span>{currentPage} / {totalPages}</span>;
    {currentPage < totalPages && <button onClick={increment}>Forward</button>}
    </>
  );
}

Paging.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired
};

export default Paging;


