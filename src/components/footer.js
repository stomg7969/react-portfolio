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
      <h4>{data.site.siteMetadata.author}, © 2019</h4>
    </footer>
  );
};

export default Footer;