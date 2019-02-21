import React from 'react';
import PropTypes from 'prop-types';
function Header({ currentPage, totalPages }) {
  function handleClick() {
    console.log('clicked');
  }

  return (
    <>
    <h2> current page: {currentPage} </h2>
    <h2> total pages: {totalPages} </h2>
    <button onClick={handleClick}> next </button>
    <button onClick={handleClick}> previous </button>
    </>
  );
}

Header.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired
};



export default Header;
