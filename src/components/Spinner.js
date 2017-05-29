import React from 'react';
import spinner from './spinner.gif';
import '../css/loading.css';

const Spinner = () => {
  return (
    <div className="loading">
      <img className="loading-img" src={spinner} />
    </div>
  );
};

export default Spinner;
