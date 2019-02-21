
export const getCharacters = (page) => {
  return fetch(`https://rickandmortyapi.com/api/character?page=${page}`, {
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

export const getLocations = (page) => {
  return fetch(`https://rickandmortyapi.com/api/location?page=${page}`, {
    method: 'GET',
    headers: {
      origin: null
    }
  })
    .then(response => response.json());
  
};


