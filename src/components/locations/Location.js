import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Location extends PureComponent {
  static propTypes = {
    location: PropTypes.object.isRequired
  }

  render() {
    const { name, type, dimension } = this.props.location;

    return (
      <>
        <p>Location: {name}</p>
        <p>Type: {type}</p>
        <p>Dimension: {dimension}</p>
      </>
    );
  }
}
