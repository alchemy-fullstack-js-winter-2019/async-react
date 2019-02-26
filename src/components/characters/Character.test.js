import React from 'react';
import renderer from 'react-test-renderer'; 
import Character from './Character';

describe('Character', () => {
  it('shows the character', () => {

    const tree = renderer.create(
      <Character name='marcy' status='human' gender='gemale' species='human' image='image'  />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
