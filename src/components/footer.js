import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

const Footer = () => {
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
    <footer>
      <p>my social media link here? including resume</p>
      <p>scroll to the top button</p>
      <h4>{data.site.siteMetadata.author}, © 2019</h4>
    </footer>
  );
};

export default Footer;