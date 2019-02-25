import React, { Component, Fragment } from 'react';
import styles from './Header.css';


export default class Header extends Component {
    render() {
        return (
            <Fragment>
                <h1 className={styles.header}>HEADER Component</h1>

            </Fragment>
        );
    }
}

