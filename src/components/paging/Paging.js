import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';



export default class Paging extends Component {
    static propTypes = {
        currentPage: PropTypes.number.isRequired,
        totalPages: PropTypes.number,
        incrementPage: PropTypes.func.isRequired,
        decrementPage: PropTypes.func.isRequired

    };
    render() {
        return (
            <Fragment>
                <p>CURRENT PAGE {this.props.currentPage}</p>
                <p>TotalPages {this.props.totalPages}</p>
                <button onClick={this.props.incrementPage}>NEXT PAGE</button>
                <button onClick={this.props.decrementPage}>PREVIOUS PAGE</button>
            </Fragment>
        );
    }
}
