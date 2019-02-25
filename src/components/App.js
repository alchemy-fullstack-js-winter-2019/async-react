import React, { Component, Fragment } from 'react';
import Header from './header/Header';
import Characters from './characters/Characters';
import Paging from './paging/Paging';

export default class App extends Component {
    state = {
        currentPage: 1,
        totalPages: null,
    };


    decrementPage = () => {
        this.setState({ currentPage: this.state.currentPage - 1 });
    };
    incrementPage = () => {
        this.setState({ currentPage: this.state.currentPage + 1 });
    };
    updateTotalPages = (pageCount) => {
        this.setState({ totalPages: pageCount });
    };


    render() {
        const { currentPage, totalPages } = this.state;
        return (
            <Fragment>
                <Header/>
                <Paging
                    totalPages={totalPages}
                    currentPage={currentPage}
                    incrementPage={this.incrementPage}
                    decrementPage={this.decrementPage}/>
                <Characters
                    currentPage={currentPage}
                    updateTotalPages={this.updateTotalPages}/>
            </Fragment>
        );
    }
}
