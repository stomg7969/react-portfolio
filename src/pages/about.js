import React from 'react';

import Skills from '../components/skills';
import copyEmail from '../helper/copyEmail';
import aboutStyles from '../styles/components/about.module.scss';

import self from '../assets/images/portrait.jpg';
import linkedin from '../assets/logo/linkedin.png';
import github from '../assets/logo/github.png';
import medium from '../assets/logo/medium.png';
import resume from '../assets/images/resume.png';
import pdf from '../assets/cv/resume.pdf';

const AboutPage = () => {
  return (
    <div className="inner">
      <header className="major">
        <h2>About</h2>
        <div id={aboutStyles.profile}>
          <div>
            <img id={aboutStyles.portrait} src={self} alt="portrait" />
            <p>
              I'm a full-stack developer with serious passion for developing
              softwares that provide the best user experiences.
            </p>
            <p>
              I believe in Cloud Computing. Pursuing AWS Certification
              studies will enhance my knowledge further.
            </p>
            <a className={aboutStyles.imageLink} href="http://www.certmetrics.com/amazon/public/badge.aspx?i=9&t=c&d=2019-07-12&ci=AWS00914171" target="_blank">
              <img className={aboutStyles.icons} src="https://www.certmetrics.com/api/ob/image/amazon/c/9" alt="aws cp" />
            </a>
          </div>
          <Skills />
        </div>
        <h4 id="myEmail" className={aboutStyles.myEmail} onClick={copyEmail}>click to copy: stomg7969@gmail.com</h4>
      </header>
      <ul className="icons major">
        <li>
          <a className={aboutStyles.imageLink} href="https://www.linkedin.com/in/k1natepark/" target="_blank">
            <img className={aboutStyles.logo} src={linkedin} alt="linkedin" />
          </a>
        </li>
        <li>
          <a className={aboutStyles.imageLink} href="https://github.com/stomg7969" target="_blank">
            <img className={aboutStyles.logo} src={github} alt="github" />
          </a>
        </li>
        <li>
          <a className={aboutStyles.imageLink} href="https://medium.com/@stomg7969" target="_blank">
            <img className={aboutStyles.logo} src={medium} alt="medium" />
          </a>
        </li>
        <li>
          <a className={aboutStyles.imageLink} href={pdf} target="_blank">
            <img className={aboutStyles.logo} src={resume} alt="resume icon by ancorp.com" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AboutPage;