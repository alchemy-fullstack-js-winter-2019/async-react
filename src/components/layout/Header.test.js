import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';

describe('Header', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <Header title={'<async React app/>'}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
