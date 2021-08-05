import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCharacters } from '../../state/char';

const CharacterList = () => {
  const [page, setPage] = useState(1);
  const { characters, loading } = useCharacters();
  if (loading)
    return (
      <img
        src="https://media.giphy.com/media/jyanYxvGz3MOc/giphy.gif"
        alt="Loading"
      />
    );

  const characterElements = characters.map((character) => (
    <li key={character.id}>
      <Link to={`/${character.id}`}>
        <p>Character Here</p>
      </Link>
    </li>
  ));

  return (
    <>
      <button
        disabled={page <= 1}
        onClick={() => setPage((prevPage) => prevPage - 1)}
      >
        &lt;
      </button>
      {page}
      <button onClick={() => setPage((prevPage) => prevPage + 1)}>&gt;</button>
      <ul>{characterElements}</ul>
    </>
  );
};

export default CharacterList;
