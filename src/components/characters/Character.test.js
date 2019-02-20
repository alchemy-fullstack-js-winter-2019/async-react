import React from 'react';
import renderer from 'react-test-renderer';
import Character from './Character';

describe('Character', () => {
  it('matches a snapshot', () => {const character = {
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
  };
  const tree = renderer.create(
    <Character 
      character={character}
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
  });
});
