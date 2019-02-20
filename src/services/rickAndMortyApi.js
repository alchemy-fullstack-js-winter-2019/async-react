export const getCharacters = () => {
  return fetch('https://cors-anywhere.herokuapp.com/http://rickandmortyapi.com/api/character', {
    method: 'GET',
    headers: {
      origin: null
    }
  })
    .then(response => response.json())
    .then(res => {
      return {
        totalPages: res.info.pages,
        results: res.results
      };
    });
};
