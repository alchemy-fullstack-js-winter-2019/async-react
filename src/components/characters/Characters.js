import React from 'react';
import renderer from 'react-test-renderer';
import Character from './Character';

describe('Character', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <Character
        
      />
    ).toJSON();
  
    expect(tree).toMatchSnapshot();
  });
});
