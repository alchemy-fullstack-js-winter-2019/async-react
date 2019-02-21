export const getCharacters = () => {
  return fetch('https://cors-anywhere.herokuapp.com/http://rickandmortyapi.com/api/character', {
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

// We had to specify the headers because we're using the cors-anywhere in the http request
