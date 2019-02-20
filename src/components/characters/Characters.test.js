import React from 'react';
import renderer from 'react-test-renderer';
import Characters from './Characters';

describe('Character', () => {
  it('matches a snapshot', () => {
    const characters = [
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

    const tree = renderer.create(
      <Characters
        characters={characters}
      />
    ).toJSON();
  
    expect(tree).toMatchSnapshot();
  });
});
