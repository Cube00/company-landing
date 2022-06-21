import React from 'react';

import './strength-item.styles.scss'

const StrengthItem = ({title, description, image}) => {
  return <>
    <div className="st-item">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="info">
        <h2>{title}</h2>
        <h4>{description}</h4>
      </div>
    </div>
  </>
}

export default StrengthItem
