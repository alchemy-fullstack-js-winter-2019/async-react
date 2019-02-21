import React from 'react';
import renderer from 'react-test-renderer';
import Character from './characters/Character';

describe('Character', () => {
  it('matches a snapshot', () => {
    const character = {
      name: 'Rick',
      status: 'Alive',
      species: 'Human',
      gender: 'Male'
    };
    const tree = renderer.create(
      <Character character={character}/>
    ).toJSON();
  
    expect(tree).toMatchSnapshot();

  });
});
