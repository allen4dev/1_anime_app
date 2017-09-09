import React from 'react';

import MovieSection from './../../features/movies/components/MovieSection';

function Home() {
  return (
    <div className="Home container">
      <MovieSection />
      <MovieSection />
      <MovieSection />
      <MovieSection />
    </div>
  );
}

export default Home;
