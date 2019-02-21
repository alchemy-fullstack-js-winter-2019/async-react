import React, { Component, Fragment } from 'react';
import Character from './Character';
import { getCharacters } from '../services/rickAndMortyApi';
import PropTypes from 'prop-types';


export default class App extends Component {
    // constructor(props) {
    //     super(props);
    // }
    static propTypes = {
        currentPage: PropTypes.number.isRequired
    };
    state = {
        characters: []
    };

    componentDidUpdate() {
        console.log('COMPONENTDID MOUNT', this.props.currentPage);
        getCharacters(this.props.currentPage)
            .then(chars => {
                this.setState({ characters: chars.results });
            });
    }

    render() {
        const characterList = this.state.characters.map(char => {
            return (
                <Character character={char} key={char.name}/>
            );
        });
        return (
            <Fragment>
                <ul>
                    {characterList}
                </ul>
            </Fragment>
        );
    }
}

