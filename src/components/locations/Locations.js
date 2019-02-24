import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getLocations } from '../../services/rickAndMortyApi';
import Location from './Location';
import Paging from '../paging/Paging';

export default class Locations extends PureComponent {
  state = {
    locations: [],
    currentPage: 1
  }

  static propTypes = {
    currentPage: PropTypes.number,
    totalPages: PropTypes.number,
    decrement: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired,
    updateTotalPages: PropTypes.func.isRequired
  }

  fetchLocations = page => {
    getLocations(page)
      .then(res => {
        this.props.updateTotalPages(res.totalPages);
        this.setState({ locations: res.results });
      });
  }

  componentDidMount() {
    this.fetchLocations(1);
  }

  componentDidUpdate(prevProps) {
    const { currentPage } = this.props;
    if(prevProps.currentPage !== currentPage) {
      this.fetchLocations(this.props.currentPage);
    }
  }

  render() {
    const locationsList = this.state.locations.map(loc => {
      return <Location
        key={loc.id}
        location={loc}
      />;
    });

    const { currentPage, totalPages, increment, decrement } = this.props;

    return (
      <>
      <Paging
        currentPage={currentPage}
        totalPages={totalPages}
        decrement={decrement}
        increment={increment}
      />
      <ul>
        {locationsList}
      </ul>
    </>
    );
  }
}
