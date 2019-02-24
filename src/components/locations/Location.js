import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Location extends PureComponent {
  static propTypes = {
    result: PropTypes.object.isRequired
  }

  render() {
    const { name, type, dimension } = this.props.result;

    return (
      <>
        <p>Location: {name}</p>
        <p>Type: {type}</p>
        <p>Dimension: {dimension}</p>
      </>
    );
  }
}
