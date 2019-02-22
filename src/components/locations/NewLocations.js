import React from 'react';
import Location from './Location';
import { getLocations } from '../../services/rickAndMortyApi';
import PropTypes from 'prop-types';
import { withPaging } from '../paging/Paging';
import { withFetch } from '../fetch/Fetch';

export class Locations extends React.PureComponent {
  static propTypes = {
    results: PropTypes.array.isRequired
  }

  render() {
    const listOfLocations = this.props.results.map(location => {
      return <li key={location.id}><Location location={location}/></li>;
    });

    return (
      <div>
        <h3>Locations</h3>
        <ul>
          {listOfLocations}
        </ul>
      </div>
    );
  }
}

const FetchLocation = withFetch(Locations)(getLocations);

export const LocationsWithPaging = withPaging(FetchLocation(Locations));


