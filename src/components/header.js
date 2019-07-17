import React from 'react';
import { Link } from 'gatsby';
// I can use .module for scss to make the class/id to be locally scoped.
import headerStyles from '../styles/components/header.module.scss';

const Header = () => {
  return (
    <header className={headerStyles.header} >
      <h1>
        <Link className={headerStyles.title} to="/">
          Nate (KyungWon) Park
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">HOME</Link></li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">ABOUT</Link></li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">CONTACT</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;