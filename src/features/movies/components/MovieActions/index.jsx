import React from 'react';

import './index.css';

function MovieActions() {
  return (
    <div className="MovieActions">
      <div className="MovieActions-buttons ButtonGroup">
        <button className="MovieAction-button btn">Watch now</button>
        <button className="MovieAction-button btn btn-flat">
          Add to favorites
        </button>
      </div>
    </div>
  );
}

export default MovieActions;
