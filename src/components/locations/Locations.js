import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getLocations } from '../../services/rickAndMortyApi';
import Location from './Location';

export default class Locations extends PureComponent {
    state = {
      locations: [],
      currentPage: 1,
      totalPages: null
    }
    static propTypes = {
      increaseCount: PropTypes.func.isRequired,
      decreaseCount: PropTypes.func.isRequired,
      updateTotalPages: PropTypes.func.isRequired
    }

    componentDidMount() {
      getLocations(this.state.currentPage)
        .then(res => {
          this.setState({ locations: res.results }, () => {
            this.props.updateTotalPages(res.totalPages);
          });
        });
    }
    componentDidUpdate() {
      getLocations(this.state.currentPage)
        .then(res => {
          this.setState({ locations: res.results }, () => {
            this.props.updateTotalPages(res.totalPages);
          });
        });
    }

    render() {
      const locations = this.state.locations.map(location => {
        return <Location key={location.id} location={location}/>;
      });

      return (
        <ul>
          {locations} 
        </ul>
      );
    }
}

