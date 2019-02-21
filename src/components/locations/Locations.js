import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getLocations } from '../../services/rickAndMortyApi';
import Location from './Location';

class Locations extends PureComponent {
  static propTypes = {
    locationPage: PropTypes.number
  }

  state = {
    locations: []
  }

  componentDidMount() {
    getLocations()
      .then(response => {
        this.setState({ locations: response.results });
      });
  }

  render() {
    const locations = this.state.locations.map(l => {
      return (
        <li key={l.id}><Location location={l} /></li>
      );
    });
    return (
      <Fragment>
        <h1>Locations</h1>
        <ul>
          {locations}
        </ul>
      </Fragment>
    );
  }
}

export default Locations;
