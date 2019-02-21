import React, { Fragment, PureComponent } from 'react';
import 'normalize-css';
import '../css/App.css';
import Header from './header/Header';
import Characters from './characters/Characters';
import Paging from './paging/Paging';

export default class App extends PureComponent {
  state = {
    currentPage: 1,
    totalPages: 25
  }

  updatePageForward = () => {
    const { currentPage, totalPages } = this.state;
    if(currentPage > totalPages - 1) return;
    this.setState({ currentPage: currentPage + 1 }, () => {
      console.log('inside update page method', currentPage);
    });
  }

  updatePageBackward = () => {
    const { currentPage } = this.state;
    if(currentPage < 2) return;
    this.setState({ currentPage: currentPage - 1 });
  }

  updateTotalPages() {

  }

  render() {
    const { totalPages, currentPage } = this.state;
    return (
      <Fragment>
        <Header />
        <Paging totalPages={totalPages} currentPage={currentPage} updatePageForward={this.updatePageForward} updatePageBackward={this.updatePageBackward}/>
        <Characters currentPage={currentPage}/>
      </Fragment>
    );
  }
}

