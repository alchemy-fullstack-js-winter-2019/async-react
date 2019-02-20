import React, { PureComponent } from 'react';
import Character from './Character';

const results = [
  {
    name: 'bob',
    img: 'https://www.littledayout.com/wp-content/uploads/articles/2017/07-July/20170715-WorldEmojiDay/DabEmoji.jpg',
    status: 'alive',
    species: 'human',
    gender: 'mail'
  },
  {
    name: 'bob2',
    img: 'https://www.littledayout.com/wp-content/uploads/articles/2017/07-July/20170715-WorldEmojiDay/DabEmoji.jpg',
    status: 'dead',
    species: 'animal',
    gender: 'mail' 
  }
];

export default class Characters extends PureComponent {
  state = {
    characters: []
  }

  componentDidMount() {
    this.setState({ characters: results });
  }

  render() {
    const charactersList = this.state.characters.map(char => {
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
