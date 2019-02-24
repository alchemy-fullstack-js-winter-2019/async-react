import React, { PureComponent } from 'react';
import Paging from '../paging/Paging';

export default (Component, apiCall) => {
  class Results extends PureComponent {
    state = {
      results: [],
      currentPage: 1,
      totalPages: 1
    }

    fetch = page => {
      apiCall(page)
        .then(res => {
          this.setState({ results: res.results, totalPages: res.totalPages });
        });
    }

    componentDidMount() {
      this.fetch(1);
    }

    componentDidUpdate(prevProps, prevState) {
      const { currentPage } = this.state;
      if(prevState.currentPage !== currentPage) {
        this.fetch(currentPage);
      }
    }

    increment = () => {
      let page = this.state.currentPage;
  
      page === this.state.totalPages ? page = 1 : page++;
      this.setState({ currentPage: page });
    }
  
    decrement = () => {
      let page = this.state.currentPage;
  
      page === 1 ? page = this.state.totalPages : page--;
      this.setState({ currentPage: page });
    }

    render() {
      const { results, currentPage, totalPages } = this.state;
      const resultsList = results.map(res => {
        return <Component
          key={res.id}
          result={res}
        />;
      });

      return (
        <>
          <Paging
            currentPage={currentPage}
            totalPages={totalPages}
            decrement={this.decrement}
            increment={this.increment}
          />
          <ul>
            {resultsList}
          </ul>
        </>
      );
    }
  }

  return Results;
};
