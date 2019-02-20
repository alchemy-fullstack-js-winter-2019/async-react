import React from 'react';
import renderer from 'react-test-renderer';
import Characters from './Characters';

describe('Characters', () => {
  it('test a matching snapshot', () => {
    const tree = renderer.create(
      <Characters/>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
