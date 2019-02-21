import React, { Component, Fragment } from 'react';
import Character from './Character';
import { getCharacters } from '../services/rickAndMortyApi';
import PropTypes from 'prop-types';


export default class App extends Component {
    // constructor(props) {
    //     super(props);
    // }
    static propTypes = {
        currentPage: PropTypes.number.isRequired,
        updateTotalPages: PropTypes.func.isRequired
    };
    state = {
        characters: []
    };

    componentDidUpdate() {
        getCharacters(this.props.currentPage)
            .then(chars => {
                this.setState({ characters: chars.results }, () => {
                    this.props.updateTotalPages(chars.totalPages);
                });
            });

    }
    componentDidMount() {
        getCharacters(this.props.currentPage)
            .then(chars => {
                this.setState({ characters: chars.results }, () => {
                    this.props.updateTotalPages(chars.totalPages);
                });
            });
    }

    render() {
        const characterList = this.state.characters.map(char => {
            return (
                <Character character={char} key={char.id}/>
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

