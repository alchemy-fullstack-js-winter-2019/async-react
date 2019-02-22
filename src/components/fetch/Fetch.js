import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

//function returns function which then returns component 

export const withFetch = Component => requestFn => {
  class WithFetch extends PureComponent {
    state = {
      results: []
    };

    static defaultProps = {
      currentPage: 1
    }
  
    static propTypes = {
      currentPage: PropTypes.number,
      updateTotalPages: PropTypes.func.isRequired
    }
  

    fetchResults = () => {
      requestFn(this.props.currentPage)
        .then(response => {
          this.props.updateTotalPages(response.totalPages);
          this.setState({ results: response.results });
        });
    }

    componentDidMount = () => {
      this.fetchResults();
    }

    componentDidUpdate = (prevProps) => {
      if(prevProps.currentPage !== this.props.currentPage) {
        this.fetchResults();
      }
    }
    render() {
      return (
        <Component 
          results={this.state.results}
          {...this.props}
        />
      );
    }
  }

  return WithFetch;
};
