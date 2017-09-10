import React from 'react';
import { string, number } from 'prop-types';

import './index.css';

function MovieDescription(props) {
  return (
    <div className="MovieDescription">
      <h4 className="MovieDescription-title">{props.canonicalTitle}</h4>
      <div className="MovieDescription-info">
        <span className="MovieDescription-rating">{props.popularityRank}</span>
        <span className="MovieDescription-year">{props.startDate}</span>
      </div>
    </div>
  );
}

MovieDescription.propTypes = {
  canonicalTitle: string.isRequired,
  popularityRank: number,
  startDate: string.isRequired,
};

MovieDescription.defaultProps = {
  popularityRank: 0,
};

export default MovieDescription;
