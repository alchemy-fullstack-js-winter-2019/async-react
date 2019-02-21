export const getCharacters = (page) => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(res => res.json())
    .then(json => ({
      totalPages: json.info.pages,
      results: json.results
    }));
};

export const getLocations = () => {
  return fetch('https://rickandmortyapi.com/api/location/')
    .then(res => res.json())
    .then(json => ({
      locationTotalPages: json.info.pages,
      results: json.results
    }));
};
