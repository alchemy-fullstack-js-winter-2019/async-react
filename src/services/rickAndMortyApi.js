const getCharacters = (currentPage) => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`, {
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

const getLocations = (currentPage) => {
  return fetch(`https://rickandmortyapi.com/api/location/?page=${currentPage}`, {
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
export { getCharacters, getLocations };

