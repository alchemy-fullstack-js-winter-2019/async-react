import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Paging.css';

export default class Paging extends PureComponent {
  static propTypes = {
    currentPage: PropTypes.number,
    totalPages: PropTypes.number.isRequired,
    decrement: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired
  }

  render() {
    const { currentPage, totalPages, decrement, increment } = this.props;
    return (
      <>
        <header>
          <p>Current Page: {currentPage}</p>
          <p>Total Pages: {totalPages}</p>
        </header>
        <button onClick={decrement}>{'<'}</button>
        <button onClick={increment}>{'>'}</button>
      </>
    );
  }
}
