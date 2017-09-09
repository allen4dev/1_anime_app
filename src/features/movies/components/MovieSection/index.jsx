import React from 'react';

import Movie from './../Movie';

import './index.css';

function MovieSection() {
  return (
    <section className="MovieSection">
        <h2 className="MovieSection-title">Adventure</h2>
        <div className="MovieSection-movies">
          <Movie />
          <Movie />
          <Movie />
          <Movie />
        </div>
      </section>
  )
}

export default MovieSection
