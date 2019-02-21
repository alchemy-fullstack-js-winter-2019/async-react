/* eslint-disable no-console */
import React, { Component } from 'react';
// import Paging from './Paging';
import Characters from './characters/Characters';
import withPaging from './Paging';

class App extends Component {
  render() {  
    return (
      <>
        <Characters updateTotalPages={() => { }}/>
        {/* <Paging 
          currentPage
        /> */}
      </>
        
    );
  }
function; 
}

export default App;

