export const getCharacters = (page) => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(res => res.json())
    .then(json => ({
      totalPages: json.info.pages,
      results: json.results
    }));
};

export const getLocations = (page) => {
  return fetch(`https://rickandmortyapi.com/api/location/?page=${page}`)
    .then(res => res.json())
    .then(json => ({
      totalPages: json.info.pages,
      results: json.results
    }));
};

// We had to specify the headers because we're using the cors-anywhere in the http request before switching back to reg api call
