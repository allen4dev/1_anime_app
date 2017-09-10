import React from 'react';
import { element, string, shape } from 'prop-types';
import { Link } from 'react-router-dom';

import Image from './../../../../shared/Image';

import './index.css';

function Movie(props) {
  return (
    <article className="Movie">
      <Link className="Movie-link" to={`/detail/${props.id}`}>
        <Image
          src={props.posterImage.small}
          description={props.canonicalTitle}
        />
        {props.children}
      </Link>
    </article>
  );
}

Movie.propTypes = {
  children: element.isRequired,
  id: string.isRequired,
  canonicalTitle: string.isRequired,
  posterImage: shape({
    small: string,
  }).isRequired,
};

export default Movie;
