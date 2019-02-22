const getCharacters = page => {
  return fetch(`https://rickandmortyapi.com/api/character?page=${page}`, {
    headers: {
      'origin': null
    }
  })
    .then(res => res.json())
    .then(json => ({
      totalPages: json.info.pages,
      results: json.results
    }));
};

const getLocations = page => {
  return fetch(`https://rickandmortyapi.com/api/location?page=${page}`, {
    headers: {
      'origin': null
    }
  })
    .then(res => res.json())
    .then(json => ({
      totalPages: json.info.pages,
      results: json.results
    }));
};

export { getCharacters, getLocations };
