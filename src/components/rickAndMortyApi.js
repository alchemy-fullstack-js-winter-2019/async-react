export const getCharacters = () => {
  return fetch('https://rickandmortyapi.com/api/character/', {
    headers: {
      origin: null
    }
  })
    .then(res => res.json())
    .then(json => ({
      totalPages: json.info.pages,
      results: json.results
    }));
};
