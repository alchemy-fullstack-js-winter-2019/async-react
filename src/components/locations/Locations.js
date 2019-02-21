import React, {} from 'react';
import Location from './Location';
import { getLocations } from '../../services/rickAndMortyApi';
import PropTypes from 'prop-types';

export default class Locations extends React.Component {
  state = {
    locations: [] 
  }

  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    updateTotalPages: PropTypes.func.isRequired
  }
  
  componentDidMount() {
    const { currentPage, updateTotalPages } = this.props;
    getLocations(currentPage)
      .then(response => {
        console.log('RESPONSE', response);
        updateTotalPages(response.totalPages);
        this.setState({ locations: response.results });
      });
  }

  componentDidUpdate() {
    const { currentPage } = this.props;
    getLocations(currentPage)
      .then(response => {
        this.setState({ locations: response.results });
      });
  }

  render() {
    const listOfLocations = this.state.locations.map(location => {
      return <li key={location.id}><Location location={location}/></li>;
    });

    return (
      <ul>
        {listOfLocations}
      </ul>
    );
  }
}
