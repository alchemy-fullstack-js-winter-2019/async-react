import React from 'react';
import PropTypes from 'prop-types';

// export const withPaging = Component => {
//   class WithPaging extends Component {
//     state = {
//       currentPage: 1,
//       totalPages: 1
//     };
//     increment = () => {
//       this.setState(state => currentPage: state.currentPage)
//     };

//     decrement = () => {
//       this.setState(state => ({ currentPage: state.currentPage}))
//     };
//     updateTotalpages = 

//     render()
//       return(
  // // <Paging
  
  
  
  // ) 
  
  
//   }
//   }
// return WithPaging
// };

function Paging({ currentPage, totalPages, handleClickIncrement, handleClickDecrement }) {
  return (
    <>
    {currentPage > 1 && <button onClick={this.handleClickDecrement}>Back</button>;}
    <span>{currentPage} / {totalPages}</span>;
    {currentPage < totalPages && <button onClick={this.handleClickIncrement}>Forward</button>;}
    </>
  )

}

Paging.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  handleClickDecrement: PropTypes.number.isRequired
};