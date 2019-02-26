import React from 'react';
import renderer from 'react-test-renderer';
import Characters from './Characters';

describe ('characters', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <Characters characters={[{ name:'Ricky', gender:'male', species:'human', status:'alive' }]} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
