

export const getCharacters = (page) => {
    return fetch(`https://cors-anywhere.herokuapp.com/http://rickandmortyapi.com/api/character/?page=${page}`, 
        {
            headers: {
                origin: null
            }
        })
        .then(res => {
            return res.json();
        })
        .then(json => ({
            totalPages: json.info.pages,
            results: json.results

        }));
};

