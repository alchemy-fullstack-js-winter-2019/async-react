import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import { getLocations } from '../../services/rickAndMortyApi';
import { withPaging } from '../Paging';
import { withFetch } from '../fetch/Fetch';

class Locations extends PureComponent {
  static propTypes = {
    results: PropTypes.array.isRequired,
  }

  render() {
    const locations = this.props.results.map(l => {
      return (
        <li key={l.id}><Location location={l} /></li>
      );
    });
    return (
      <Fragment>
        <h1>Locations!</h1>
        <ul>
          {locations}
        </ul>
      </Fragment>
    );
  }
}

const FetchLocation = withFetch(Locations)(getLocations);

export const LocationsWithPaging = withPaging(FetchLocation);
