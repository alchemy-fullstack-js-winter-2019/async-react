import React from 'react';
import renderer from 'react-test-renderer';
import Character from './Character';

describe('App', () => {
  it('', () => {
    const tree = renderer.create(
      <Character />
    ).toJSON();
  
    expect(tree).toMatchSnapshot();
  });
}); 
