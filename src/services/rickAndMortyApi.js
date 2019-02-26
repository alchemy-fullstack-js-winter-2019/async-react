const get = (result, page) => {
  return fetch(`https://rickandmortyapi.com/api/${result}/?page=${page}`, {
    headers: { 'origin':  null }
  })
    .then(res => res.json())
    .then(json => {
      return {
        totalPages: json.info.pages,
        results: json.results
      };
    });
};

export const getCharacters = page => get('character', page);

export const getLocations = page => get('location', page);
