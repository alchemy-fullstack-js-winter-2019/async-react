import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getLocations } from '../../services/rickAndMortyApi';
import Location from './Location';
import Paging from '../paging/Paging';

export default class Locations extends PureComponent {
  state = {
    locations: [],
    currentPage: 1,
    totalPages: 1
  }

  fetch = page => {
    getLocations(page)
      .then(res => {
        this.setState({ locations: res.results, totalPages: res.totalPages });
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
    const locationsList = this.state.locations.map(loc => {
      return <Location
        key={loc.id}
        location={loc}
      />;
    });

    const { currentPage, totalPages } = this.state;

    return (
      <>
      <Paging
        currentPage={currentPage}
        totalPages={totalPages}
        decrement={this.decrement}
        increment={this.increment}
      />
      <ul>
        {locationsList}
      </ul>
    </>
    );
  }
}
