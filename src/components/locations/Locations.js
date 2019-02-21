import React from 'react';
import Location from './Location';
import { getLocations } from '../../services/rickAndMortyApi';
import PropTypes from 'prop-types';
import { withPaging } from '../paging/Paging';

class Locations extends React.PureComponent {
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
        updateTotalPages(response.totalPages);
        this.setState({ locations: response.results });
      });
  }

  componentDidUpdate(prevProps) {
    if(prevProps.currentPage !== this.props.currentPage) {
      const { currentPage, updateTotalPages } = this.props;
      getLocations(currentPage)
        .then(response => {
          updateTotalPages(response.totalPages);
          this.setState({ locations: response.results });
        });
    }
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

export default withPaging(Locations);
