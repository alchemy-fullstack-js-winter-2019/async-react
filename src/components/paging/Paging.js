import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from '../../css/App.css';
import 'normalize-css';

function Paging({ currentPage, totalPages, updatePageForward, updatePageBackward }) {
  return (
    <Fragment>
      <div className={styles.buttons}>
        <button onClick={updatePageBackward}>Back</button>
        <p>{currentPage} / {totalPages}</p>
        <button onClick={updatePageForward}>Forward</button>
      </div>
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
