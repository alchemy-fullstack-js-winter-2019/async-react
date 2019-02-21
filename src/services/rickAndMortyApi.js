export const getCharacters = (currentPage) => {
  console.log(currentPage);
  return fetch(`https://cors-anywhere.herokuapp.com/http://rickandmortyapi.com/api/character/?page=${currentPage}`, {
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
