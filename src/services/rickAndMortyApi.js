export const getCharacters = page => {
  return fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then(res => res.json()) //one of the methods in fetch with parses the message to json, this returns a promise that returns the json
    .then(json => ({
      totalPages: json.info.pages,
      results: json.results
    }));
};

export const getLocations = page => {
  return fetch(`https://rickandmortyapi.com/api/location?page=${page}`)
    .then(res => res.json())
    .then(json => ({
      totalPages: json.info.pages,
      results: json.results
    }));
};
