import React from 'react';
import renderer from 'react-test-renderer';
import Locations from './Locations';

jest.mock('../../services/rickAndMortyApi.js');

describe('Locations', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <Locations updateTotalPages={jest.fn()}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
