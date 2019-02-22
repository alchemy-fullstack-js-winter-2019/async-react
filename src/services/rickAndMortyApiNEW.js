const requestApi = (resource, currentPage) => {
  return fetch(`https://rickandmortyapi.com/api/${resource}/?page=${currentPage}`, {
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

export const getLocations = (currentPage) => {
  return requestApi('location', currentPage);
};

export const getLCharacters = (currentPage) => {
  return requestApi('characters', currentPage);
};

