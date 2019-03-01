import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

jest.mock('../services/rickAndMortyApi')
describe('App', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <App />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
