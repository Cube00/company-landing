import React from 'react';

import Logo from '../../assets/logo.png';

import './footer.styles.scss';

import {ImLocation} from 'react-icons/im';
import {SiMaildotru} from 'react-icons/si';
import {BsFillTelephoneFill} from 'react-icons/bs';

const Footer = () => {
  return <>
    <div className="footer">
      <div className="top-footer">
        <div>
          <h2>TIME TO MOVE ON TO INDIVIDUAL SOLUTIONS.</h2>
          <img className="footerlogo" src={Logo} alt="" />
        </div>
        <div>
          <h3>CONTACT US</h3>
          <div className="c-u">
            <span><ImLocation className="c-u-img" /></span>
            <span>27 Division St, New York, NY 10002, USA</span>
          </div>
          <div className="c-u">
            <span><SiMaildotru className="c-u-img" /></span>
            <span>company@example.com <br/> company@example.com</span>
          </div>
          <div className="c-u">
            <span><BsFillTelephoneFill className="c-u-img" /></span>
            <span>+1 800 123 456 789 <br/> +1 800 123 456 789</span>
          </div>
        </div>
        <div>
          <h3>SUBSCRIBE</h3>

          <div className="subscribe">
            <h4>Stay always in touch! Subscribe to our newsletter.</h4>
            <input type="email" id="subscribe-email" name="sub-email" placeholder="Your Email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="bott-footer">
        <h2>Copyright © 2022. All Rights Reserved.</h2>
      </div>
    </div>
  </>
}

export default Footer;
