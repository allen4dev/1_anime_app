import React from 'react';

import './index.css';

function MovieDescription() {
  return (
    <div className="MovieDescription">
      <h4 className="MovieDescription-title">School Rumble</h4>
      <div className="MovieDescription-info">
        <span className="MovieDescription-rating">5</span>
        <span className="MovieDescription-year">1992</span>
      </div>
    </div>
  );
}

export default MovieDescription;
