import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import { getLocations } from '../../services/rickAndMortyApi';
import { withPaging } from '../paging/Paging';
import styles from './Locations.css';

class Locations extends PureComponent {
  static propTypes = {
    page: PropTypes.number,
    updateTotalPages: PropTypes.func.isRequired
  };

  static defaultProps = {
    page: 1
  }

  state = {
    locations: []
  }

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
    const locations = this.state.locations.map(loc => {
      return (
        <Location key={loc.id} location={loc}/>
      );
    });
    return (
      <div className={styles.locations}>
        <h2>Locations</h2>
        {locations}
      </div>
    );
  }
}

export default withPaging(Locations);

