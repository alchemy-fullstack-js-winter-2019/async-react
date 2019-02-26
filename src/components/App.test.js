import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

jest.mock('../services/rickAndMortyApi.js');

describe('App', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <App />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

