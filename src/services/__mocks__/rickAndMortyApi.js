const results = [
  {
    name: 'bob',
    img: 'https://www.littledayout.com/wp-content/uploads/articles/2017/07-July/20170715-WorldEmojiDay/DabEmoji.jpg',
    status: 'alive',
    species: 'human',
    gender: 'mail'
  },
  {
    name: 'bob2',
    img: 'https://www.littledayout.com/wp-content/uploads/articles/2017/07-July/20170715-WorldEmojiDay/DabEmoji.jpg',
    status: 'dead',
    species: 'animal',
    gender: 'mail' 
  }
];

const locationRes = [
  { name: 'Earth', type: 'planet', dimension: '5' },
  { name: 'Earth2', type: 'planet', dimension: '5' },
  { name: 'Earth3', type: 'planet', dimension: '5' }
];

export const getCharacters = () => {
  return Promise.resolve({
    totalPages: 25,
    results
  });
};

export const getLocations = () => {
  return Promise.resolve({
    totalPages: 25,
    results: locationRes
  });
};
