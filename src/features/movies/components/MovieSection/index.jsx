import React from 'react';

import Movie from './../Movie';
import MovieDescription from './../MovieDescription';

import './index.css';

function MovieSection() {
  return (
    <section className="MovieSection">
      <h2 className="MovieSection-title">Adventure</h2>
      <div className="MovieSection-movies">
        <Movie>
          <MovieDescription />
        </Movie>
        <Movie>
          <MovieDescription />
        </Movie>
        <Movie>
          <MovieDescription />
        </Movie>
        <Movie>
          <MovieDescription />
        </Movie>
      </div>
    </section>
  );
}

export default MovieSection;
