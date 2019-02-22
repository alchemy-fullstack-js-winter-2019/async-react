import React, { Fragment, PureComponent } from 'react';
import 'normalize-css';
import styles from '../css/App.css';
import Header from './header/Header';
import Characters from './characters/Characters';
import Locations from './locations/Locations';

export default class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <Header />
        <div className={styles.container}>
          <div className={styles.characters}>
            <Characters />
          </div>
          <div className={styles.locations}>
            <Locations />
          </div>
        </div>
      </Fragment>
    );
  }
}
