import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const withPaging = (ComponentToPage) => {
  class withPaging extends Component {
    state = {
      currentPage: 1,
      totalPages: 1
    }

    incrementCurrentPg = () => {
      this.setState(state => ({ currentPage: state.currentPage + 1 }));
    }
  
    decrementCurrentPg = () => {
      this.setState(state => ({ currentPage: state.currentPage - 1 }));
    }
  
    updateTotalPages = (whatTotalPgsShouldBe) => {
      this.setState({ totalPages: whatTotalPgsShouldBe });
    }

    render() {
      const { currentPage, totalPages } = this.state;
      return (
        < >
          <Paging currentPage={currentPage}
            totalPages={totalPages}
            increment={this.incrementCurrentPg}
            decrement={this.decrementCurrentPg}
          />
          <ComponentToPage page={currentPage}
            updateTotalPages={this.updateTotalPages}
            {...this.props}
          />
        </>
      );
    }
  }
  return withPaging;
};

function Paging({
  currentPage,
  totalPages,
  increment,
  decrement
}) {
  const divStyle = {
    margin: '10px 5px 0px 5px',
    fontSize: '12px'
  };
  const sectStyle = {
    background: 'cyan',
    textAlign: 'center',
    marginLeft: '10px',
    zIndex: 'auto'
  };
  return (
    < >
      <section style={sectStyle}>
        <div style={divStyle}>
          {currentPage < totalPages && <button id="next-btn" onClick={increment}>Next</button>}
          <p>{currentPage} of {totalPages}</p>
          {currentPage > 1 && <button id="prev-btn" onClick={decrement}>Back</button>}
        </div>
      </section>
    </>
  );
}

Paging.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
};

export default Paging;
