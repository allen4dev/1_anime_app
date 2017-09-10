import React from 'react';

import Movie from './../Movie';
import MovieDescription from './../MovieDescription';

import './index.css';

function renderMovies(movies) {
  return (
    <div className="MovieSection-movies">
      {movies.map(movie => (
        <Movie {...movie}>
          <MovieDescription />
        </Movie>
      ))}
    </div>
  );
}

function MovieSection({ category, movies }) {
  return (
    <section className="MovieSection">
      <h2 className="MovieSection-title">{category}</h2>
      {renderMovies(movies)}
    </section>
  );
}

export default MovieSection;
