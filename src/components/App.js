import React, { Component, Fragment } from 'react';
import Header from './header/Header';
import Characters from './characters/Characters';

export default class App extends Component {
    state = {
        currentPage: 1,
        totalPages: null,
    }


    decrementPage = () => {
        this.setState({ currentPage: this.state.currentPage - 1 });
    }
    incrementPage = () => {
        this.setState({ currentPage: this.state.currentPage + 1 });
    }
    // updateTotalPages = () => {
    //     this
    // }


    render() {
        const { currentPage, totalPages } = this.state;
        console.log(currentPage);
        // const pageNum = currentPage.toString();
        return (
            <Fragment>
                <Header/>
                <p>CURRENT PAGE {currentPage}</p>
                <p>TotalPages {totalPages}</p>
                <button onClick={this.incrementPage}>NEXT PAGE</button>
                <button onClick={this.decrementPage}>PREVIOUS PAGE</button>
                <Characters
                    currentPage={currentPage}/>
            </Fragment>
        );
    }
}
