import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Character extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string,
    status: PropTypes.string.isRequired,
    species: PropTypes.string,
    gender: PropTypes.string
  }

  render() {
    return (
      <>
        <img src={this.props.img}/>
        <p>{this.props.name}</p>
        <p>Status: {this.props.status}</p>
        <p>Species: {this.props.species}</p>
        <p>Gender: {this.props.gender}</p>
      </>
    );
  }
}
