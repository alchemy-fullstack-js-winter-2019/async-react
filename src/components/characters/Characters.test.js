import React from 'react';
import renderer from 'react-test-renderer';
import Characters from './Characters';

jest.mock('../../services/rickAndMortyApi');

describe('Characters', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <Characters />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
