import React from 'react';
import { Link } from 'gatsby';

const ContactPage = () => {
  return (
    <div>
      <h1>Contact</h1>
      <p>The best way to reach me is via <a href="https://www.linkedin.com/in/k1natepark/">on Linkedin!</a></p>
      <p><Link to="/">Back home</Link></p>
    </div>
  );
};

export default ContactPage;