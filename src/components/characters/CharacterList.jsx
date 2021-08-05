import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCharacters } from '../../state/char';
import Character from './Character';

const CharacterList = () => {
  const [page, setPage] = useState(1);
  const { characters, loading } = useCharacters(page);

  if (loading)
    return (
      <img
        src="https://media.giphy.com/media/jyanYxvGz3MOc/giphy.gif"
        alt="Loading"
      />
    );

  const characterElements = characters.map((character) => (
    <li key={character._id}>
      <Link to={`/${character._id}`}>
        <Character {...character} />
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
