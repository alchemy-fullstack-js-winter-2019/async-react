import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Character extends PureComponent {
    static propTypes = {
      character: PropTypes.object.isRequired
    }
    render() {
      const { character } = this.props;
      return (
        <li>
          <h3>{character.name}</h3>
          <h4>{character.species}</h4>
          <h5>{character.status}</h5>
          <h5>{character.gender}</h5>
        </li>
      );
    }
}
