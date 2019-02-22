import React from 'react';
import PropTypes from 'prop-types';
import styles from './Paging.css';

function Paging({ totalPages, currentPage, increaseCount, decreaseCount }) {
  return (
    <h5 className={styles.Paging}>
      <button onClick={increaseCount}>Next</button>
      <span>Current Page: {currentPage}</span>
      <span>Total Pages: {totalPages}</span>
      <button onClick={decreaseCount}>Prev</button>
    </h5>
  );
}

Paging.propTypes = {
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  increaseCount: PropTypes.func,
  decreaseCount: PropTypes.func
};

export default Paging;
