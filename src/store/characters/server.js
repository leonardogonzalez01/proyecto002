import axios from 'axios';

export const getCharacters = async url => await axios.get(url);

/*export const getCharacters = async id =>
  await axios.get(`https://rickandmortyapi.com/api/characters/${id}`);*/