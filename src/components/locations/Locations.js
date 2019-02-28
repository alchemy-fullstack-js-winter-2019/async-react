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

  fetchLocations = () => {
    getLocations(this.props.page)
      .then(res => {
        this.props.updateTotalPages(res.totalPages);
        this.setState({ locations: res.results });
      });
  }

  componentDidMount() {
    this.fetchLocations();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.page !== this.props.page) {
      this.fetchLocations();
    }
  }

  render() {
    const locationList = this.state.locations.map(location => {
      return (<Location key={location.id} location={location} />);
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


const FetchLocations = withFetch(Locations)(getLocations);
export default withPaging(FetchLocations);
// export const LocationsWithPaging =  withPaging(Locations);

