import React from 'react';
import renderer from 'react-test-renderer'; 
import Character from './characters/Character';

describe('Character', () => {
  it('shows the character', () => {
    const character = {
      name: 'Jon Snow',
      gender: 'Male', 
      status: 'Alive', 
      house: 'N/A'
    };
    const tree = renderer.create(
      <Character character={character} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
