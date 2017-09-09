import React from 'react';
import { Link } from 'react-router-dom';

import MovieDescription from './../MovieDescription'

import Image from './../../../../shared/Image';

import './index.css';

function Movie() {
  return (
    <article className="Movie">
      <Link className="Movie-link" to="/detail/1">
        <Image
          src="https://media.kitsu.io/anime/poster_images/15/small.jpg?1442610450"
          description="Kenji Harima, a delinquent with a sizable reputation, is in a similar situation"
        />
        <MovieDescription />
      </Link>
    </article>
  )
}

export default Movie;