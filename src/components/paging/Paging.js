import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const withPaging = ComponentToPage => {
  class WithPaging extends Component {
    state = {
      currentPage: 1,
      totalPages: 1
    };

    pageForward = () => {
      this.setState(state => ({ currentPage: state.currentPage + 1 }));
    }

    pageBackward = () => {
      this.setState(state => ({ currentPage: state.currentPage - 1 }));
    }

    updateTotalPages = (totalPages) => {
      this.setState({ totalPages: totalPages });
    }
    
    render() {
      const { currentPage, totalPages } = this.state;
      return (
        <>
          <Paging 
            currentPage={currentPage}
            totalPages={totalPages}
            pageBackward={this.pageBackward}
            pageForward={this.pageForward}
          />
          <ComponentToPage
            page={currentPage}
            updateTotalPages={this.updateTotalPages}
            {... this.props} 
          />
        </>
      );
    }
  }
  return WithPaging;
};

function Paging({ currentPage, totalPages, pageForward, pageBackward }) {
  return (
    <>
      {currentPage > 1 && <button onClick={pageBackward}>BACK</button>}
      <span>{currentPage} of {totalPages}</span>
      {currentPage < totalPages && <button onClick={pageForward} >NEXT</button>}
    </>
  );
}
Paging.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  pageForward: PropTypes.func.isRequired,
  pageBackward: PropTypes.func.isRequired
};

export default Paging;
