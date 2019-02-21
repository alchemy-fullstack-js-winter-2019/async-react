export const getCharacters = (page) => {
  return fetch(`https://rickandmortyapi.com/api/character/?pages=${page}`)
    .then(res => res.json())
    .then(json => ({
      totalPages: json.info.pages,
      results: json.results
    }));
};
