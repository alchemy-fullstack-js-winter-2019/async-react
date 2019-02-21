import React from 'react';
import PropTypes from 'prop-types';

function Paging({ currentPage, totalPages, pageForward, pageBackward }) {
  return (
    <div>
      {currentPage > 1 && <button onClick={pageBackward}>BACK</button>}
      <span>{currentPage} of {totalPages}</span>
      {currentPage < totalPages && <button onClick={pageForward} >NEXT</button>}
    </div>
  );
}
Paging.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  pageForward: PropTypes.func.isRequired,
  pageBackward: PropTypes.func.isRequired
};

export default Paging;
