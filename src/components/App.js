import React, { Component } from 'react';
import Header from './layout/Header';
import './App.css';
import styles from './App.css';
import Characters from './characters/Characters';
import Locations from './locations/Locations';
import Footer from './layout/Footer';

export default class App extends Component {
  render() {
    return (
      < >
        <Header title={'<async React app/>'}/>
        <main className={styles.main}>
          <Characters />
          <Locations />
        </main>
        <Footer name={'© 2019 Cari Palazzolo'}/>
      </>
    );
  }
}


