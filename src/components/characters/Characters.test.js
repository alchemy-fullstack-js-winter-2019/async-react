import React from 'react';
import renderer from 'react-test-renderer';
import Character from './Character';

jest.mock('../../services/rickAndMortyApi.js');

describe('Characters', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <Character updateTotalPages={jest.fn()}/>    
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
