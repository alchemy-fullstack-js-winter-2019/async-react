import React from 'react';
import renderer from 'react-test-renderer';
import Character from './Character';

describe('Character', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <Character
        name='bob'
        img='https://www.littledayout.com/wp-content/uploads/articles/2017/07-July/20170715-WorldEmojiDay/DabEmoji.jpg'
        status='alive'
        species='human'
        gender='mail'
      />
    ).toJSON();
  
    expect(tree).toMatchSnapshot();
  });
});
