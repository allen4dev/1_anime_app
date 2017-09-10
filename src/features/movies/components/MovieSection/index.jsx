import React from 'react';
import { arrayOf, object } from 'prop-types';

import Movie from './../Movie';
import MovieDescription from './../MovieDescription';

import './index.css';

function renderMovies(movies) {
  return (
    <div className="MovieSection-movies">
      {movies.map(movie => (
        <Movie key={movie.id} id={movie.id} {...movie.attributes}>
          <MovieDescription
            canonicalTitle={movie.attributes.canonicalTitle}
            startDate={movie.attributes.startDate}/>
        </Movie>
      ))}
    </div>
  );
}

function MovieSection({ movies }) {
  return (
    <section className="MovieSection">
      {renderMovies(movies)}
    </section>
  );
}

MovieSection.propTypes = {
  movies: arrayOf(object),
};

MovieSection.defaultProps = {
  movies: [],
};

export default MovieSection;
