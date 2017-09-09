import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

function Navigation() {
  return (
    <nav className="Navigation">
      <Link to="/movies" className="Navigation-item">Movies</Link>
      <Link to="/tv" className="Navigation-item">Tv</Link>
      <Link to="/music" className="Navigation-item">Music</Link>
    </nav>
  );
}

export default Navigation;
