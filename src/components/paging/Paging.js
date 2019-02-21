import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from '../../css/App.css';
import 'normalize-css';

function Paging({ currentPage, totalPages, updatePageForward, updatePageBackward, title }) {
  return (
    <Fragment>
      <h2 className={styles.subTitle}>{title}</h2>
      <div className={styles.buttons}>
        <button onClick={updatePageBackward}>Back</button>
        <p className={styles.pageInfo}>{currentPage} / {totalPages}</p>
        <button onClick={updatePageForward}>Forward</button>
      </div>
    </Fragment>
  );
}

Paging.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  updatePageBackward: PropTypes.func.isRequired,
  updatePageForward: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default Paging;
