export const getCharacters = (page) => {

  // TO USE: rickAndMortyApi service mock cors all characters
  // export const getCharacters = () => {
  // return fetch('https://cors-anywhere.herokuapp.com/http://rickandmortyapi.com/api/character', {
  //   headers: {
  //     origin: null
  //   }
  // })
  //   .then(res => res.json())
  //   .then(json => ({
  //     totalPages: json.info.pages,
  //     results: json.results
  //   }));

  // TO USE: rickAndMortyApi service per page characters
  return fetch(`https://rickandmortyapi.com/api/character?page=${page}`, {
    headers: {
      origin: null
    }
  })
    .then(res => res.json())
    .then(json => ({
      totalPages: json.info.pages,
      results: json.results
    }));

  // TO USE: StarWarsApi service per page people
  // return fetch(`https://swapi.co/api/people?page=${page}`, {
  //   headers: {
  //     origin: null
  //   }
  // })
  //   .then(res => res.json())
  //   .then(json => ({
  //     totalPages: Math.ceil(json.count / 10),
  //     results: json.results
  //   }));
};
// TO USE: rickAndMortyApi service per page locations
export const getLocations = (page) => {
  return fetch(`https://rickandmortyapi.com/api/location?page=${page}`, {
    headers: {
      origin: null
    }
  })
    .then(res => res.json())
    .then(json => ({
      totalPages: json.info.pages,
      results: json.results
    }));

// TO USE: StarWarsApi service per page people
  // return fetch(`https://swapi.co/api/people?page=${page}`, {
  //   headers: {
  //     origin: null
  //   }
  // })
  //   .then(res => res.json())
  //   .then(json => ({
  //     totalPages: Math.ceil(json.count / 10),
  //     results: json.results
  //   }));
};
