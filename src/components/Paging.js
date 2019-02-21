import React from 'react';
import PropTypes from 'prop-types';

const withPaging = ComponentToPage => {
  class WithPaging extends Component {
    state = {
      currentPage: 1,
      totalPages: 1
    };

  incrementPage = () => {
    this.setState(state => ({ currentPage: state.currentPage }));
  };

  decrementPage = () => {
    this.setState(state => ({ currentPage: state.currentPage }));
  };

  updateTotalPages = totalPages => {
    this.setState({ totalPages });
  };

  render() {
    const { currentPage, totalPages } = this.state;
    return (
      <>
      <Paging 
        currentPage={currentPage}
        totalPages={totalPages}
        incrementPage={this.incrementPage}
        decrementPage={this.decrementPage}
      />
      <ComponentToPage
        page={currentPage}
        updateTotalPages={this.updateTotalPages}
        {...this.props}
      />
      </>
    );
  }
  }
  return WithPaging;
};

function Paging({ currentPage, totalPages, incrementPage, decrementPage }) {
  return (
    <> 
      {currentPage > 1 &&  <button onClick={decrementPage}>Previous Page</button>}
        <span>{currentPage} / {totalPages}</span>
        {currentPage < totalPages && <button onClick={incrementPage}>Next Page</button>}
      </>
  );
}

Paging.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  incrementPage: PropTypes.func.isRequired,
  decrementPage: PropTypes.func.isRequired
};

export default withPaging;
