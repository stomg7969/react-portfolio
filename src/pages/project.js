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

const ProjectPage = () => {
  return (
    <>
      {/* MOONYA ECOMMERCE SECTION */}
      <section className="spotlight">
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
                <img src={github} alt="github logo" className={projectStyles.logoLink} />
              </a>
            </li>
            <li>Live Demo :</li>
            <li>
              <a className={projectStyles.imgLink} href="https://moonya-ecommerce.herokuapp.com/" target="_blank">
                <img src={heroku3} alt="heroku logo" className={projectStyles.logoLink} />
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
            <li><img src={react} alt="react logo" className={projectStyles.logo} /></li>
            <li><img src={redux} alt="redux logo" className={projectStyles.logo} /></li>
            <li><img src={jquery} alt="jquery logo" className={projectStyles.logo} /></li>
            <li><img src={rails} alt="rails logo" className={projectStyles.logo} /></li>
            <li><img src={heroku} alt="heroku logo" className={projectStyles.logo} /></li>
            <li><img src={jwt} alt="jwt logo" className={projectStyles.logo} /></li>
          </ul>
        </div>
      </section>
      {/* LOCAL BRUSH SECTION */}
      <section className="spotlight">
        <div className="image">
          <img src={localBrush} alt="localBrush preview" />
        </div>
        <div className="content">
          <h2>Tortor dolore feugiat</h2>
          <p>- project 2</p>
        </div>
      </section>
      {/* PARKING LOT SECTION */}
      <section className="spotlight">
        <div className="image">
          <img src={parkingLot} alt="" />
        </div>
        <div className="content">
          <h2>Augue eleifend aliquet</h2>
          <p>- project 3</p>
        </div>
      </section>
    </>
  );
};
export default ProjectPage;