import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../css/App.css';
import 'normalize-css';

export const withPaging = ComponentToPage => {
  class WithPaging extends Component {
    state= {
      currentPage: 1,
      totalPages: 1
    }

    incrementCurrentPage = () => {
      const { currentPage, totalPages } = this.state;
      if(currentPage > totalPages - 1) return;
      this.setState(state => ({ currentPage: state.currentPage + 1 }));
    }

    decrementCurrentPage = () => {
      const { currentPage } = this.state;
      if(currentPage < 2) return;
      this.setState(state => ({ currentPage: state.currentPage - 1 }));
    }

    updateTotalPages = pages => {
      this.setState({ totalPages: pages });
    }

    render() {
      const { currentPage, totalPages } = this.state;
      return (
        <Fragment>
          <Paging currentPage = {currentPage}
            totalPages={totalPages}
            incrementCurrentPage={this.incrementCurrentPage}
            decrementCurrentPage={this.decrementCurrentPage}
          />
          <ComponentToPage 
            currentPage={currentPage}
            updateTotalPages={this.updateTotalPages}
            {...this.props}
          />
        </Fragment>
      );
    }
  }
  return WithPaging;
};

function Paging({ currentPage, totalPages, incrementCurrentPage, decrementCurrentPage, title }) {
  return (
    <Fragment>
      <h2 className={styles.subTitle}>{title}</h2>
      <div className={styles.buttons}>
        <button onClick={decrementCurrentPage}>Back</button>
        <p className={styles.pageInfo}>{currentPage} / {totalPages}</p>
        <button onClick={incrementCurrentPage}>Forward</button>
      </div>
    </Fragment>
  );
}

Paging.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  incrementCurrentPage: PropTypes.func.isRequired,
  decrementCurrentPage: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

