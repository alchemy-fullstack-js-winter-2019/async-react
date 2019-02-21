// export const getCharacters = () => {
export const getCharacters = (page) => {
  // return fetch('https://cors-anywhere.herokuapp.com/http://rickandmortyapi.com/api/character', {
  //   headers: {
  //     origin: null
  //   }
  // })
  //   .then(res => res.json())
  //   .then(json => ({
  //     totalPages: json.info.pages,
  //     results: json.results
  //   }));
  return fetch(`https://swapi.co/api/people?page=${page}`, {
    headers: {
      origin: null
    }
  })
    .then(res => res.json())
    .then(json => ({
      totalPages: Math.ceil(json.count / 10),
      results: json.results
    }));
};
