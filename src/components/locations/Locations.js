import React, { PureComponent } from 'react';
import { withPaging } from '../paging/Paging';
import Location from './Location';
import { getLocations } from '../../services/rickAndMortyApi';
import PropTypes from 'prop-types';
import { withFetch } from '../fetch/Fetch';



export class Locations extends PureComponent {
  static propTypes = {
    page: PropTypes.number,
    updateTotalPages: PropTypes.func.isRequired
  };
  static defaultProps = {
    page: 1,
    totalPages: 1
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
}


const FetchLocation = withFetch(Location)(getLocations);
export default withPaging(FetchLocation);
// export const LocationsWithPaging =  withPaging(Locations);

