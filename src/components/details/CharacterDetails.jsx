import React from 'react';
import { useParams } from 'react-router-dom';
import { useCharacter } from '../../state/char';

const CharDeets = () => {
  const { id } = useParams();
  const char = useCharacter(id);

  if (!char)
    return (
      <img
        src="https://media.giphy.com/media/jyanYxvGz3MOc/giphy.gif"
        alt="Loading"
      />
    );

  return (
    <section>
      <h2>Character Details</h2>
      <dl>
        <dt>Name</dt>
        <dd>{char.name}</dd>
        <dt>Weapon</dt>
        <dd>{char.weapon}</dd>
        <dt>Profession</dt>
        <dd>{char.profession}</dd>
        <dt>History</dt>
        <dd>{char.position}</dd>
        <img src={char.photoUrl} alt={char.name} />
      </dl>
    </section>
  );
};

export default CharDeets;
