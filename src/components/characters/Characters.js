import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

export default class Characters extends PureComponent {
  static propTypes = {
    characters: PropTypes.array.isRequired
  }

  render() {
    const charactersList = this.props.characters.map(char => {
      return <Character key={char.name}
        character={char}
      />;
    });

    return (
      <ul>
        {charactersList}
      </ul>
    );
  }
}
