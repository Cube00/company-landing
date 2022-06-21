import React from 'react';

import './starter-slide.styles.scss';

import BGIMAGE from '../../assets/land-bg.png';

const StarterSlide = () =>{
  return <>
    <div className="landing-starter" style={{backgroundImage: `url(${BGIMAGE})`}}>
      <div className="starter-info">
        <div className="bg-sl">DIGITAL</div>
        <div className="slogan">
          <h2>MEASURABLE & EFFECTIVE RESULTS FOR CUSTOMERS</h2>
          <h4>Your business from creative idea to launching</h4>
        </div>
        <div className="buttons">
          <button>Get Started</button>
          <button>Join Us on Telegram</button>
        </div>
      </div>
    </div>
  </>
}

export default StarterSlide
