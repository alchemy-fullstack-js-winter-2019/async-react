import React from 'react';
import renderer from 'react-test-renderer';
import Location from './Location';

describe('Location', () => {
  it('matches a snapshot', () => {
    const location = {
      name: 'Earth (C-137)',
      type: 'Planet',
      dimension: 'Dimension C-137',
      created: '2017-11-10T12:42:04.162Z',
      residents: '27'
    };
    const tree = renderer.create(
      <Location location={location}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

