import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getLocations } from '../../services/rickAndMortyApi';

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
        <li key={l.id}>{l.name}</li>
      );
    });
    return (
      <Fragment>
        <h1>Locations</h1>
        {locations}
      </Fragment>
    );
  }
}

export default Locations;
