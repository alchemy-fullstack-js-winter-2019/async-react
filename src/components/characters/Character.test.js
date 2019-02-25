import React from 'react';
import renderer from 'react-test-renderer';
import Character from './Character';

describe('App', () => {
  it('matches a snapshot', () => {
    const char = {
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male'
    };
    const tree = renderer.create(
      <Character 
        name={char.name}
        status={char.status}
        species={char.species}
        gender={char.gender}
      />
    ).toJSON();
  
    expect(tree).toMatchSnapshot();
  });
}); 
