import React from 'react';
import PropTypes from 'prop-types';

function Paging({ totalPages, currentPage, increaseCount, decreaseCount }) {
  return (
    <h5>
      <button onClick={increaseCount}>Next</button>
      <span>Current Page:{currentPage}</span>
      <span>Total Pages:{totalPages}</span>
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
