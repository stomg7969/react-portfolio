import React from "react";
import { Link } from 'gatsby';

import Layout from '../components/layout';

const Index = () => {
  return (
    <Layout>
      <h1>Helloooo world!</h1>
      <p>Contact <Link to="/contact">Here</Link></p>
    </Layout>
  );
};


export default Index;

// https://youtu.be/8t0vNu2fCCM
// () minutes, look at the comment.