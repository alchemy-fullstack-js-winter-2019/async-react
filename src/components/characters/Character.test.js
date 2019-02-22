import React from 'React';
import renderer from 'react-test-renderer';
import Character from './Character';

describe('Character', () => {
  it('matches a snapshot', () => {
    const character = {
      name: 'Black Widow',
      status: 'alive',
      species: 'human',
      gender: 'female'
    };
    const tree = renderer.create(<Character character={character} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
