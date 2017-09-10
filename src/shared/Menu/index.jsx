import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

function Menu() {
  return (
    <ul className="Menu">
      <li className="Menu-item">
        <Link to="/" className="Menu-link">
          Description
        </Link>
      </li>
      <li className="Menu-item">
        <Link to="/" className="Menu-link">
          Review
        </Link>
      </li>
      <li className="Menu-item">
        <Link to="/" className="Menu-link">
          Trailer
        </Link>
      </li>
    </ul>
  );
}

export default Menu;
