import React, { Fragment, PureComponent } from 'react';
import 'normalize-css';
import '../css/App.css';
import Header from './header/Header';
import Characters from './characters/Characters';
import Locations from './locations/Locations';
import Paging from './paging/Paging';

export default class App extends PureComponent {
  state = {
    currentPage: 1,
    totalPages: null
  }

  updatePageForward = () => {
    const { currentPage, totalPages } = this.state;
    if(currentPage > totalPages - 1) return;
    this.setState({ currentPage: currentPage + 1 }, () => {
    });
  }

  updatePageBackward = () => {
    const { currentPage } = this.state;
    if(currentPage < 2) return;
    this.setState({ currentPage: currentPage - 1 });
  }

  updateTotalPages = (pages) => {
    this.setState({ totalPages: pages }); 
  }

  render() {
    const { totalPages, currentPage } = this.state;
    return (
      <Fragment>
        <Header />
        <div>
          <Paging totalPages={totalPages} currentPage={currentPage} updatePageForward={this.updatePageForward} updatePageBackward={this.updatePageBackward}/>
          <Characters currentPage={currentPage} updateTotalPages={this.updateTotalPages}/>
        </div>
        <div>
          <Paging totalPages={totalPages} currentPage={currentPage} updatePageForward={this.updatePageForward} updatePageBackward={this.updatePageBackward}/>
          <Locations currentPage={currentPage} updateTotalPages={this.updateTotalPages}/>
        </div>
      </Fragment>
    );
  }
}

