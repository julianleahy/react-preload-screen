import React from 'react';
import './Preload.css'

const Preload = (props) => {
  const loader = props.loaded ? 'Loaded' : '';
  return (
    <div className={loader}>
      <div className="PreloadWrapper">
        <div className="Preload"></div>
        <div className="PreloadSection PreloadLeft"></div>
        <div className="PreloadSection PreloadRight"></div>
      </div>
    </div>
  )
}

export default Preload;