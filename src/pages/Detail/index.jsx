import React from 'react';

import Movie from './../../features/movies/components/Movie';
import MovieActions from './../../features/movies/components/MovieActions';

import Menu from './../../shared/Menu';

import './index.css';

function Detail() {
  return (
    <section className="Detail container">
      <div className="Detail-movie">
        <Movie>
          <MovieActions />
        </Movie>
      </div>

      <div className="Detail-content">
        <Menu />
        <section className="Detail-about">
          <header className="Detail-header">
            <div className="Detail-heading">
              <h2 className="Detail-title">School rumble</h2>
              <div className="Rating">Rating here</div>
            </div>
          </header>
          <div className="Detail-stats">
            <span className="Detail-stat">⭐ 9.5</span>
            <span className="Detail-stat">⏲ 108 Mins</span>
            <span className="Detail-stat">March 04, 2016</span>
          </div>
          <p className="Detail-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            nemo mollitia doloremque corporis veniam, neque dolorem.
            Necessitatibus distinctio minima doloremque recusandae voluptas
            voluptates doloribus modi corrupti dolorem. Exercitationem, corporis
            deserunt.
          </p>

          <ul className="Detail-info">
            <li className="Detail-infoItem">
              <span className="Detail-infoTitle">Starring</span>
              <div className="Detail-infoDescription">
                <span className="Detail-infoDescriptionItem">Actor 1</span>
                <span className="Detail-infoDescriptionItem">Actor 2</span>
                <span className="Detail-infoDescriptionItem">Actor 3</span>
              </div>
            </li>
            <li className="Detail-infoItem">
              <span className="Detail-infoTitle">Genres</span>
              <div className="Detail-infoDescription">
                <span className="Detail-infoDescriptionItem">Comedy</span>
                <span className="Detail-infoDescriptionItem">Romance</span>
                <span className="Detail-infoDescriptionItem">School</span>
              </div>
            </li>
            <li className="Detail-infoItem">
              <span className="Detail-infoTitle">Countries</span>
              <div className="Detail-infoDescription">
                <span className="Detail-infoDescriptionItem">Canada</span>
                <span className="Detail-infoDescriptionItem">USA</span>
                <span className="Detail-infoDescriptionItem">
                  United Kingdom
                </span>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}

export default Detail;
