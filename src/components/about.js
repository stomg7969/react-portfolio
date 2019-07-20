import React from 'react';
// import {Link} from 'gatsby';

import Skills from '../components/skills';

import aboutStyles from '../styles/components/about.module.scss';

import self from '../assets/images/portrait.jpg';
import linkedin from '../assets/logo/linkedin.png';
import github from '../assets/logo/github.png';
import medium from '../assets/logo/medium.png';
import resume from '../assets/images/resume.png';
import pdf from '../assets/cv/resume.pdf';

const AboutPage = () => {

  const copyEmail = () => {
    const fullText = document.getElementById("myEmail");
    const fullEmail = fullText.innerText.split(' ');
    const fakeInput = document.createElement('input');
    document.body.appendChild(fakeInput);
    fakeInput.value = fullEmail[fullEmail.length - 1].toLowerCase();
    fakeInput.select();
    document.execCommand('copy');
    fakeInput.remove();
    alert("Copied to Clipboard: " + fakeInput.value);
  };

  return (
    <div className="inner">
      <header className="major">
        <h2>About</h2>
        <div id={aboutStyles.profile}>
          <div>
            <img src={self} alt="portrait" id={aboutStyles.portrait} />
            <p>I'm a full-stack developer with serious passion for developing softwares that provide the best user experiences.</p>
            <p>I believe in Cloud Computing. Pursuing AWS Certification studies will enhance my knowledge further.</p>
            <a href="http://www.certmetrics.com/amazon/public/badge.aspx?i=9&t=c&d=2019-07-12&ci=AWS00914171" className={aboutStyles.imageLink}>
              <img src="https://www.certmetrics.com/api/ob/image/amazon/c/9" alt="aws cp" className={aboutStyles.icons} />
            </a>
          </div>
          <Skills />
        </div>
        <h4 id="myEmail" onClick={copyEmail}>click to copy: stomg7969@gmail.com</h4>
        <h2>make sure to refactor codes, React Hooks!!!!</h2>
      </header>
      <ul className="icons major">
        <li>
          <a href="https://www.linkedin.com/in/k1natepark/" target="_blank" className={aboutStyles.imageLink}><img src={linkedin} alt="linkedin" className={aboutStyles.logo} /></a>
        </li>
        <li>
          <a href="https://github.com/stomg7969" target="_blank" className={aboutStyles.imageLink}><img src={github} alt="github" className={aboutStyles.logo} /></a>
        </li>
        <li>
          <a href="https://medium.com/@stomg7969" target="_blank" className={aboutStyles.imageLink}><img src={medium} alt="medium" className={aboutStyles.logo} /></a>
        </li>
        <li>
          <a href={pdf} target="_blank" className={aboutStyles.imageLink}><img src={resume} alt="resume icon by ancorp.com" className={aboutStyles.logo} /></a>
        </li>
      </ul>
    </div>
  );
};

export default AboutPage;