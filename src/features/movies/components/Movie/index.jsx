import React from 'react';
import { element } from 'prop-types';
import { Link } from 'react-router-dom';

import Image from './../../../../shared/Image';

import './index.css';

function Movie({ children }) {
  return (
    <article className="Movie">
      <Link className="Movie-link" to="/detail/1">
        <Image
          src="https://media.kitsu.io/anime/poster_images/15/small.jpg?1442610450"
          description="Kenji Harima, a delinquent with a sizable reputation, is in a similar situation"
        />
        {children}
      </Link>
    </article>
  );
}

Movie.propTypes = {
  children: element.isRequired,
};

export default Movie;
