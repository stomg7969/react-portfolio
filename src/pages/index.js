import React from "react";
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Layout>
      <h1>{data.site.siteMetadata.title}</h1>
      <p>Contact <Link to="/contact">Here</Link></p>
    </Layout>
  );
};


export default Index;

// https://youtu.be/8t0vNu2fCCM
// () minutes, look at the comment.