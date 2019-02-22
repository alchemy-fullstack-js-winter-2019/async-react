import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export const withFetch = Component => requestFn => {
  class WithFetch extends PureComponent {
    static propTypes = {
      page: PropTypes.number,
      updateTotalPages: PropTypes.func
    }
    static defaultProps = {
      page: 1,
      totalPages: 1
    }

    state = {
      results: []
    };

    fetchResults = () => {
      requestFn(this.props.page)
        .then(res => {
          this.props.updateTotalPages((res.totalPages));
          this.setState({ results: Response.results });
        });
    }

    componentDidMount() {
      this.fetchResults();
    }
  

    componentDidUpdate(prevProps) {
      if(prevProps.page !== this.props.page) {
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
