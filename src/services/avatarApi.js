/* eslint-disable max-len */
export const fetchCharacters = async (page) => {
  const res = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=10&page=${page}`);

  const json = await res.json();

  return json;
};

export const fetchCharacter = async (id) => {

  const res = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`);

  return await res.json();
};
