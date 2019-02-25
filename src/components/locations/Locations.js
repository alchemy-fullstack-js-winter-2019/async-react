import React, { PureComponent } from 'react';
import { withPaging } from '../paging/Paging';
import Location from './Location';
import { getLocation } from '../../services/rickAndMortyApi';



export class Locations extends PureComponent {
  static propTypes = {
    page: PropType.number,
    updatedTotalPages: PropTypes.func.isRequired
  };
  static defaultProps = {
    page:1
  };
  state = {
    locations: []
  };

  fetchLocation = () => {
    getLocations()
      .then(response => {
        this.props.updateTotalPages(response.totalPages);
        this.setState({ locations: response.results });
      });
  }

  componentDidMount() {
    this.fetchLocation();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.page !== this.props.page) {
      this.fetchLocation();
    }
  }

  render() {
    const locationList = this.state.locations.map(location => {
    return <Location key={location.id} location={location} />;
  });

  return (
    <ul>
    <li>
    {locationList}
    </li>
    </ul>
  );
}


export const LocationsWithPaging =  withPaging(Locations);
