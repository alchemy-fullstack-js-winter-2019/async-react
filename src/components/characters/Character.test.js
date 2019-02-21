import React from 'react';
import renderer from 'react-test-renderer';
import Character from './Character';

describe('does things', () => {
    it('matches a snapchat', () => {
        const char = {
            'name': 'Antenna Rick',
            'status': 'unknown',
            'species': 'Human',
            'type': 'Human with antennae',
            'gender': 'Male',
        };

        const tree = renderer.create(
            <Character character={char}/>
        );
        expect(tree).toMatchSnapshot();
    });
});
