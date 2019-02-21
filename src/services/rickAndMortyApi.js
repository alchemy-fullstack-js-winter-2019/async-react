export const getCharacters = () => {
  return fetch('https://cors-anywhere.hrokuapp.com/http://rickandmortyapi.com/api/character', {
    headers: {
      origin: null
    }
  })
    .then(res => res.json())
    .then(json => ({
      totalPages: Math.ceil(json.count / 10),
      results: json.results
    }));
};
