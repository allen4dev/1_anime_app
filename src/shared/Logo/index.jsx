import React from 'react';
import { Link} from 'react-router-dom';

import './index.css';

function Logo() {
  return (
    <div className="Logo">
      <h1 className="Logo-title">
        <Link className="Logo-link" to="/">Animeflix</Link>
      </h1>
    </div>
  );
}

export default Logo;
