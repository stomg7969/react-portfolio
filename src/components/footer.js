import React from 'react';
// import { config } from '../../config';
import copyEmail from '../helper/copyEmail';
import aboutStyles from '../styles/components/about.module.scss';

import linkedin from '../assets/logo/linkedin.png';

export default function Footer() {
  return (
    <footer id="footer">
      <h4>I'm available for work! Let's get in touch.</h4>
      <a className={aboutStyles.imageLink} href="https://www.linkedin.com/in/k1natepark/" target="_blank">
        <img className={aboutStyles.logo} src={linkedin} alt="linkedin" />
      </a>
      <p id="myEmail" className={aboutStyles.myEmail} onClick={copyEmail}>Click to copy: stomg7969@gmail.com</p>
      {/* <ul className="icons">
        {config.socialLinks.map(social => {
          const { style, icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ${style} ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul> */}
      <ul className="copyright">
        <li>&copy; Spectral</li>
        <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </footer>
  );
}
