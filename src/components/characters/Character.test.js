import React from 'react';
import renderer from 'react-test-renderer';
import Character from './Character';

describe('Character', () => {
  it('matches a snapshot', () => {
    const character = {
      name: 'rick',
      status: 'alive',
      species: 'human',
      gender: 'male'
    };
    const tree = renderer.create(
      <Character character={character} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
