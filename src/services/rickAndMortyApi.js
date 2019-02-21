export const getCharacters = page => {
  return fetch(`https://swapi.co/api/people?page=${page}`, {
    headers: {
      origin: null
    }
  })
    .then(res => res.json())
    .then(json => ({
      totalPages: json.info.pages,
      results: json.results
    }));
};

