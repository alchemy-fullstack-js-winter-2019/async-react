
export const getCharacters = (page) => {
  return fetch(`https://cors-anywhere.herokuapp.com/http://rickandmortyapi.com/api/character?page=${page}`, {
    method: 'GET',
    headers: {
      origin: null
    },
  })
    .then(response => response.json())
    .then(res => ({
      totalPages: res.info.pages,
      results: res.results
    }));
};
