import React from 'react';
// import { config } from '../../config';
import aboutStyles from '../styles/components/about.module.scss';
import footerStyles from '../styles/components/footer.module.scss';

import linkedin from '../assets/logo/linkedin.png';
// Helper
// import copyEmail from '../helper/copyEmail';

const FooterPage = (props) => {
  const { emailClicked, emailHandler } = props;
  return (
    <footer id="footer">
      <h4>I'm available for work! Let's get in touch.</h4>
      <a className={aboutStyles.imageLink} href="https://www.linkedin.com/in/k1natepark/" target="_blank">
        <img className={aboutStyles.logo} src={linkedin} alt="linkedin" />
      </a>
      <p id="myEmail" className={aboutStyles.myEmail} onClick={emailHandler}>
        Click to copy: stomg7969@gmail.com {emailClicked ? '✅' : ''}
      </p>
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
          Design: <a href="http://html5up.net" target="_blank">HTML5 UP</a>
        </li>
        <li>
          <a href="https://aws.amazon.com/what-is-cloud-computing" target="_blank">
            <img id={footerStyles.awsLogo} src="https://d0.awsstatic.com/logos/powered-by-aws-white.png" alt="Powered by AWS Cloud Computing" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
export default FooterPage;