import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Character extends PureComponent {
  static propTypes = {
    result: PropTypes.object.isRequired
  }

  render() {
    const { image, name, status, species, gender } = this.props.result;
    
    return (
      <li>
        <img src={image}/>
        <p>{name}</p>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
        <p>Gender: {gender}</p>
      </li>
    );
  }
}
