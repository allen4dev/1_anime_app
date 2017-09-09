import React from 'react';
import { string } from 'prop-types';

import './index.css';

function Image(props) {
  return (
    <div className="Image">
      <img src={props.src} alt={props.description} className="Image-photo" />
    </div>
  );
}

Image.propTypes = {
  src: string.isRequired,
  description: string.isRequired,
};

export default Image;
