import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
// I can use .module for scss to make the class/id to be locally scoped.
import headerStyles from '../styles/components/header.module.scss';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <header className={headerStyles.header} >
      <h1>
        <Link className={headerStyles.title} to="/">
          {data.site.siteMetadata.author}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">HOME</Link></li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">ABOUT</Link></li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/project">PROJECT</Link></li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">BLOG</Link></li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">CONTACT</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;