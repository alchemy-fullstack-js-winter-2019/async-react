import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

describe('App', () => {
  it('', () => {
    const character = renderer.create(
      <App/>
    ).toJSON();
    expect(character).toMatchSnapshot();
  });
});
