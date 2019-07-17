import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <p>The best way to reach me is via <a href="https://www.linkedin.com/in/k1natepark/">on Linkedin!</a></p>
      <p><Link to="/">Back home</Link></p>
    </Layout>
  );
};

export default ContactPage;