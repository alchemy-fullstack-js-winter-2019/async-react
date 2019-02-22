import React from 'react';
import Character from './Character';
import { getCharacters } from '../../services/rickAndMortyApi';
import PropTypes from 'prop-types';
import { withPaging } from '../paging/Paging';
import { withFetch } from '../fetch/Fetch';

// this is longer version of below 

// function withFetch(Component) {
//   return function(requestFn) {
//     class WithFetch extends PureComponent {

//     }
//   }
// }

export class Characters extends React.PureComponent {
  static propTypes = {
    results: PropTypes.array.isRequired
  }

  render() {
    const listOfCharacters = this.props.results.map(character => {
      return <li key={character.id}><Character character={character}/></li>;
    });

    return (
      <div>
        <h3>Characters</h3>
        <ul>
          {listOfCharacters}
        </ul>
      </div>
    );
  }
}

const FetchCharacters = withFetch(Characters)(getCharacters);

export default withPaging(FetchCharacters)(Characters);

