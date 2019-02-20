import React from 'react';
import renderer from 'react-test-renderer';
import Character from './Characters';

describe('Character', () => {
  it('matches a snapshot', () => {
    const character = {
      name: 'fluffy',
      status: 'alive',
      species: 'dog',
      gender: 'female'

    };
    const tree = renderer.create(
      <Character character ={character} />).toJSON();
      expect(tree).toMatchSnapshot();
  })
})