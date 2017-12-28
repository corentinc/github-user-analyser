import React from 'react';

import './style.css'

export default class Loader extends React.Component {
  render(){
    return(
      <div className="indicator">
        <svg>
          <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
          <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
        </svg>
      </div>
    );
  }
}
