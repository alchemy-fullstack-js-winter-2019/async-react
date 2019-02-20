import React from 'React';
import renderer from 'react-test-renderer';
import Characters from './characters/Characters';

describe('Characters', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(<Characters />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
