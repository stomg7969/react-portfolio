import React from 'react';

import projectStyles from '../styles/pages/project.module.scss';
// Demo screenshots
import moonya from '../assets/images/moonya.png';
import localBrush from '../assets/images/localBrush.png';
import parkingLot from '../assets/images/parkingLot.png';
// Logo
import heroku from '../assets/logo/heroku.png';
import react from '../assets/logo/react.png';
import redux from '../assets/logo/redux.png';
import rails from '../assets/logo/rails.png';
import jquery from '../assets/logo/jquery.png';
import jwt from '../assets/logo/jwt.png';
import github from '../assets/logo/github.png';
import youtube from '../assets/logo/youtube2.png';
import heroku3 from '../assets/logo/heroku4.png';
import javascript from '../assets/logo/javascript.png';

const ProjectPage = () => {
  return (
    <>
      {/* ########### MOONYA ECOMMERCE SECTION ########### */}
      <section className="spotlight" id={projectStyles.background}>
        <div className="image">
          <img src={moonya} alt="moonya preview" />
        </div>
        <div className="content">
          <h2>Moonya eCommerce</h2>
          <p>A web application for customers to buy children clothing. Login</p>
          <ul id={projectStyles.projectLink} className="icons major">
            <li>GitHub :</li>
            <li>
              <a className={projectStyles.imgLink} href="https://github.com/stomg7969/ecommerce-solo-project-frontend" target="_blank">
                <img className={projectStyles.logoLink} src={github} alt="github logo" />
              </a>
            </li>
            <li>Live Demo :</li>
            <li>
              <a className={projectStyles.imgLink} href="https://moonya-ecommerce.herokuapp.com/" target="_blank">
                <img className={projectStyles.logoLink} src={heroku3} alt="heroku logo" />
              </a>
            </li>
          </ul>
          <p>
            <i className={projectStyles.loginInfo}>Login Information: ID: 'admin' PW: 'admin'</i>
          </p>
          <h3>Technology</h3>
          <p>
            Moonya eCommerce is built using React, Redux, and JQuery,
            with Ruby on Rails backend for handling API requests, and runs on Heroku.
            User account information is secured with Json Web Token(JWT),
            and styling is customized with pure CSS and open source.
          </p>
          <ul className="icons major">
            <li><img className={projectStyles.logo} src={react} alt="react logo" /></li>
            <li><img className={projectStyles.logo} src={redux} alt="redux logo" /></li>
            <li><img className={projectStyles.logo} src={jquery} alt="jquery logo" /></li>
            <li><img className={projectStyles.logo} src={rails} alt="rails logo" /></li>
            <li><img className={projectStyles.logo} src={heroku} alt="heroku logo" /></li>
            <li><img className={projectStyles.logo} src={jwt} alt="jwt logo" /></li>
          </ul>
        </div>
      </section>
      {/* ########### LOCAL BRUSH SECTION ########### */}
      <section className="spotlight" id={projectStyles.background}>
        <div className="image">
          <img src={localBrush} alt="localBrush preview" />
        </div>
        <div className="content">
          <h2>LocalBrush</h2>
          <p>
            A web platform where homeowners can post their needs for wall painting and
            painters can search and accept painting jobs.
          </p>
          <ul id={projectStyles.projectLink} className="icons major">
            <li>GitHub :</li>
            <li>
              <a className={projectStyles.imgLink} href="https://github.com/danasevcik/LocalBrush" target="_blank">
                <img className={projectStyles.logoLink} src={github} alt="github logo" />
              </a>
            </li>
            <li>Live Demo :</li>
            <li>
              <a className={projectStyles.imgLink} href="https://localbrush.herokuapp.com/" target="_blank">
                <img className={projectStyles.logoLink} src={heroku3} alt="heroku logo" />
              </a>
            </li>
          </ul>
          <p className={projectStyles.loginInfo}>
            <i>- Painter Login: ID: 'painter' PW: 'painter' </i><br />
            <i>- Homeowner Login: ID: 'user' PW: 'user' </i>
          </p>
          <h3>Technology</h3>
          <p>
            LocalBrush uses Ruby frontend, with Ruby on Rails backend for handling API requests,
            and runs on Heroku. User account security is maintained with Json Web Token(JWT),
            and styling is customized with pure CSS and open source.
          </p>
          <ul className="icons major">
            <li><img className={projectStyles.logo} src={rails} alt="rails logo" /></li>
            <li><img className={projectStyles.logo} src={heroku} alt="heroku logo" /></li>
            <li><img className={projectStyles.logo} src={jwt} alt="jwt logo" /></li>
          </ul>
        </div>
      </section>
      {/* ########### PARKING LOT SECTION ########### */}
      <section className="spotlight" id={projectStyles.background}>
        <div className="image">
          <img src={parkingLot} alt="" />
        </div>
        <div className="content">
          <h2>Parking lot: "Don't drink and drive"</h2>
          <p>
            A parking space management application that automatically keeps
            track of car information, time, and total amount owed.
          </p>
          <ul id={projectStyles.projectLink} className="icons major">
            <li>GitHub :</li>
            <li>
              <a className={projectStyles.imgLink} href="https://github.com/EricHardiman/Parking-Lot-App" target="_blank">
                <img className={projectStyles.logoLink} src={github} alt="github logo" />
              </a>
            </li>
            <li>Recorded Demo :</li>
            <li>
              <a className={projectStyles.imgLink} href="https://youtu.be/VFaYsaAcIYs" target="_blank">
                <img className={projectStyles.logoLink} src={youtube} alt="youtube logo" />
              </a>
            </li>
          </ul>
          <p className={projectStyles.loginInfo}>
            <i>- Konami PW: (press enter) </i>
          </p>
          <h3>Technology</h3>
          <p>
            Parking Lot App built with only Javascript, with Ruby on Rails backend for handling API requests.
            Employee access is secured with customized Konami Code,
            and styling is customized with pure CSS and Bootstrap.
          </p>
          <ul className="icons major">
            <li><img className={projectStyles.logoLink} src={javascript} alt="javascript logo" /></li>
            <li><img className={projectStyles.logo} src={rails} alt="rails logo" /></li>
          </ul>
        </div>
      </section>
    </>
  );
};
export default ProjectPage;