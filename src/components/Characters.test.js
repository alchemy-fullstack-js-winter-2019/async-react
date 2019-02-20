import React from 'react';
import renderer from 'react-test-renderer';
import Characters from './characters/Characters';

describe('Characters', () => {
  it('shows the characters', ()=> {
    const characters = ['Jon', 'Sansa', 'Ned', 'Arya'];
    const tree = renderer.create(<Characters characters={characters} />);
    expect(tree).toMatchSnapshot();
  });
});
