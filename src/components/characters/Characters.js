import React, { Component, Fragment } from 'react';
import Character from './Character';
import { getCharacters } from '../services/rickAndMortyApi';


export default class App extends Component {
    state = {
        characters: []
    };

    componentDidMount() {
        getCharacters()
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

