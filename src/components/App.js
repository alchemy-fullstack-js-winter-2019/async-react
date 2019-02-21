import React, { Component } from 'react';
// import { withPaging } from './paging/Paging';
import { Characters, CharactersWithPaging } from './characters/Characters';

export default class App extends Component {
 

  render() {
    return (
      <>
        <Characters updateTotalPages={() => { }} />
        <CharactersWithPaging />
      </>
    );
  }
}
