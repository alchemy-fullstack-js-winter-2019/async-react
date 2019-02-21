import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import 'normalize-css';
import '../../css/App.css';

function Paging({ currentPage, totalPages, updatePageForward, updatePageBackward }) {
  console.log('PAGING', currentPage);
  return (
    <Fragment>
      <button onClick={updatePageBackward}>Back</button>
      <p>{currentPage} / {totalPages}</p>
      <button onClick={updatePageForward}>Forward</button>
    </Fragment>
  );
}

Paging.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  updatePageBackward: PropTypes.func.isRequired,
  updatePageForward: PropTypes.func.isRequired
};

export default Paging;
