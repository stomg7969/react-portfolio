import React from 'react';
// import { Link } from 'gatsby';
import pdf from '../assets/cv/resume.pdf';

export default function Nav({ onMenuToggle = () => { } }) {
  return (
    <nav id="nav">
      <ul>
        <li className="special">
          <a href={pdf} target="_blank">
            <span>Resume</span>
          </a>
          {/* <a
            href="#menu"
            onClick={e => {
              e.preventDefault();
              onMenuToggle();
            }}
            className="menuToggle"
          >
            <span>Menu</span>
          </a>
           <div id="menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Generic">Generic Page</Link>
              </li>
              <li>
                <Link to="/Elements">Elements</Link>
              </li>
            </ul>
            <a
              className="close"
              onClick={e => {
                e.preventDefault();
                onMenuToggle();
              }}
              href="#menu"
            >
              {''}
            </a>
          </div> */}
        </li>
      </ul>
    </nav>
  );
}
