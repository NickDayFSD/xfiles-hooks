import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, photoUrl, affiliation }) => (
  <figure>
    <img src={photoUrl} alt={name} />
    <figcaption>
      <p>{name}</p>
      <p>{affiliation}</p>
    </figcaption>
  </figure>
);

Character.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string,
  photoUrl: PropTypes.string,
  affiliation: PropTypes.string,
};

export default Character;
