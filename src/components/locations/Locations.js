import React, { PureComponent } from 'react';
import Location from './Location';
import { getLocations } from '../../services/rickAndMortyApi';
import PropTypes from 'prop-types';
import { withPaging } from '../Paging';
import { withFetch } from '../fetch/Fetch';

export class Locations extends PureComponent {

  static propTypes = {
    page: PropTypes.number,
    updateTotalPages: PropTypes.func.isRequired
  }

  static defaultProps = {
    page: 1,
  }

  state = {
    locations: []
  };

  // Call the updateTotalPages function (that was passed as a prop) to notify App what total pages should be inside this fetch function
  fetchLocations = () => {
    getLocations(this.props.page)
      .then(res => {
        this.props.updateTotalPages(res.totalPages);
        this.setState({ locations: res.results });
      });
  }

  // initial Api call for characters to load page
  componentDidMount() {
    this.fetchLocations();
  }

  // only update (call Api again) if the prevProps aren't available
  componentDidUpdate(prevProps) {
    if(prevProps !== this.props.page) {
      this.fetchLocations();
    }
  }

  render() {
    const listOfLocs = this.state.locations.map(locs => {
      return (
        <Location 
          key={locs.id}
          name={locs.name}
          type={locs.type}
          dimension={locs.dimension}
        />
      );
    });

    return (
      <div>
        {listOfLocs}
      </div>
    );
  }
}

const FetchLocations = withFetch(Locations)(getLocations);
export default withPaging(FetchLocations);
