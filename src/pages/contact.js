import React from 'react';
import { Link } from 'gatsby';

import contactStyles from '../styles/pages/about.module.scss';

const ContactPage = () => {
  return (
    <div className={contactStyles.container}>
      <h1>Contact</h1>
      <p>The best way to reach me is via <a href="https://www.linkedin.com/in/k1natepark/">on LinkedIn!</a></p>
      <p><Link to="/">Back home</Link></p>
    </div>
  );
};

export default ContactPage;