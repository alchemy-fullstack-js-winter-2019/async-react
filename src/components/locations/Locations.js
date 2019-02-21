import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getLocations } from '../../services/rickAndMortyApi';
import Location from './Location';
import { withPaging } from '../Paging';

class Locations extends PureComponent {
  static propTypes = {
    page: PropTypes.number,
    updateTotalPages: PropTypes.func.isRequired
  }

  state = {
    locations: []
  }

  static defaultProps = {
    page: 1
  }

  fetchLocations() {
    getLocations()
      .then(response => {
        this.props.updateTotalPages(response.totalPages);
        this.setState({ locations: response.results });
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

export default withPaging(Locations);
