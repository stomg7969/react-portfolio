import React from 'react';
import { Link } from 'gatsby';
// I can use .module for scss to make the class/id to be locally scoped.
import headerStyles from '../styles/components/header.module.scss';
import Pdf from '../assets/cv/KW-Nate-Park-Resume.pdf';

const Header = () => {
  return (
    <header className={headerStyles.header} >
      <nav>
        <ul className={headerStyles.navList}>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">HOME</Link></li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">ABOUT</Link></li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/project">PROJECT</Link></li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">BLOG</Link></li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">CONTACT</Link></li>
          <li><a className={headerStyles.navItem} href={Pdf} target="_blank">RESUMÉ</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;