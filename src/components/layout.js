import React from 'react';

import Header from './header';
import Footer from './footer';

import layoutStyles from '../styles/components/layout.module.scss';

const Layout = (props) => {
  return (
    <div className={layoutStyles.container}>
      <section className={layoutStyles.content} ><Header /></section>
      <section className={layoutStyles.content} >{props.children}</section>
      <section className={layoutStyles.content} ><Footer /></section>
    </div>
  );
};

export default Layout;