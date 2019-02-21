export const getCharacters = () => {
  return fetch('https://rickandmortyapi.com/api/character', {
    headers: {
      origin: null
    }
  })
    .then(res => res.json())
    .then(json => ({
      // totalPages: json.info.pages,
      totalPages:Math.cell(json.count / 10),
      results: json.results
    }));
};
