export const getCharacters = () => {
  return fetch(`https://rickandmortyapi.com/api/character/page=${page}`)
    .then(res => res.json()) //one of the methods in fetch with parses the message to json, this returns a promise that returns the json
    .then(json => ({
      totalPages: Math.ceil(json.count),
      results: json.results
    }));
};
