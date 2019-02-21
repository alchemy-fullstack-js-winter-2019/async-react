import React from 'React';
import renderer from 'react-test-renderer';
import Locations from './Locations';

jest.mock('../../services/rickAndMortyApi.js');

describe('Characters', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(<Locations />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
