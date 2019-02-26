import React, { PureComponent } from 'react';
import Location from './Location';
import { getLocations } from '../../services/__mocks__/rickAndMortyApi';
import PropTypes from 'prop-types';
import { withPaging } from '../paging/Paging';

class Locations extends PureComponent {
  static propTypes = {
    page: PropTypes.number,
    updateTotalPages: PropTypes.func.isRequired
  }

  static defaultProps = {
    page: 1
  }

  state = {
    locations: []
  }

  fetchLocations() {
    getLocations(this.props.page)
      .then(response => {
        this.setState({ locations: response.results });
        this.props.updateTotalPages(response.totalPages);
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
    const listOfLocations = this.state.locations.map(location => {
      return <li key={location.id}><Location location={location}/></li>;
    });

    return (
      <ul>{listOfLocations}</ul>
    );
  }
}
export default withPaging(Locations);
