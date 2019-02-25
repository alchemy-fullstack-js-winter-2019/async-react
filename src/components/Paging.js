import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

export const withPaging = ComponentToPage => {
  class withPaging extends Component {
    state = {
      currentPage: 1,
      totalPages: 1
    }

    pageUp = () => {
      this.setState(state => ({ currentPage: state.currentPage + 1 }));
    }
    
    pageDown = () => {
      this.setState(state => ({ currentPage: state.currentPage - 1 }));
    }

    updateTotalPages = totalPages => {
      this.setState({ totalPages });
    }

    render() {
      const { currentPage, totalPages } = this.state;
      return (
        <Fragment>
          <Paging 
            currentPage={currentPage}
            totalPages={totalPages}
            pageUp={this.pageUp}
            pageDown={this.pageDown}
          />
          <ComponentToPage 
            page={this.state.currentPage}
            updateTotalPages={this.updateTotalPages} 
            {...this.props} />
        </Fragment>
      );
    }
  }
  return withPaging;
};

function Paging({ currentPage, totalPages, pageUp, pageDown }) {
  return (
    <Fragment>
      {currentPage > 1 && <button onClick={pageDown}>Page Down</button>}
      {currentPage}
      {currentPage < totalPages && <button onClick={pageUp}>Page Up</button>}
    </Fragment>
  );
}

Paging.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  pageUp: PropTypes.func.isRequired,
  pageDown: PropTypes.func.isRequired
};

export default Paging;
