import React, { PureComponent } from 'react';
import Location from './Location';
import { getLocations } from '../../services/rickAndMortyApi';
import styles from './Locations.css';
import PropTypes from 'prop-types';
import { withPaging } from '../Paging';


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
  };

  fetchLocations = () => {
    getLocations(this.props.page)
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
    const locations = this.state.locations.map(location => {
      return (
        <Location key={location.id} location={location} />
      );
    });
    return (
      <ul className={styles.locations}>
        {locations}
      </ul>
    );
  }
}


export default withPaging(Locations);
