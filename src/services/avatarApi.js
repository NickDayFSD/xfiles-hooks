/* eslint-disable max-len */
export const fetchCharacters = async (page) => {
  const res = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters');

  const json = await res.json();

  return json.slice((page - 1) * 20, page * 20);
};

export const fetchCharacter = async (id) => {
  const res = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`);

  return res.json();
};
