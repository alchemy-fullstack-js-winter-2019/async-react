import React, { PureComponent } from 'react';
import Location from './Location';
import { getLocations } from '../../services/rickAndMortyApi';

class Locations extends PureComponent {
  state = {
    locations: []
  }

  fetchLocations() {
    getLocations()
      .then(response => {
        this.setState({ locations: response.results });
      });
  }

  componentDidMount() {
    this.fetchLocations();
  }
  render() {
    const listOfLocations = this.state.locations.map(location => {
      return <li key={location.id}><Location location={location}/></li>;
    });

    return (
      <ul>{listOfLocations}</ul>
    );
  }
}
export default Locations;
