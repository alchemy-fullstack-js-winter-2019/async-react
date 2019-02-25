import React from 'react';
import renderer from 'react-test-renderer';
import Characters from './Characters';
jest.mock('../services/rickAndMortyApi.js');


describe('does things', () => {
    it('matches a snapchat', () => {
        const tree = renderer.create(
            <Characters/>
        );
        expect(tree).toMatchSnapshot();
    });
});