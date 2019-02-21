import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';


describe('testing things', () => {


    it('renders the component correctly', () => {
        const tree = renderer.create(
            <App/>
        ).toJSON();
        expect(tree).toMatchSnapshot();

    });
});
