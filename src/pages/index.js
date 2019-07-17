import React from "react";
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import About from './about';
import Project from './project';
import Blog from './Blog';
import Contact from './contact';

import '../styles/pages/index.scss';

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `);
  const { title, author } = data.site.siteMetadata;
  return (
    <>
      <section>
        <div>
          <h2>{author}</h2>
          <p>{title}</p>
          <p>Need 404 page</p>
          <ul>
            <li><a href="/#">Scroll down</a></li>
          </ul>
        </div>
      </section>
      <Layout>
        <section>
          {/* About me section */}
          <About />
        </section>
        <section>
          {/* Portfolio section */}
          <Project />
        </section>
        <section>
          {/* Blog section */}
          <Blog />
        </section>
        <section>
          {/* Contact section */}
          <Contact />
        </section>
      </Layout>
    </>
  );
};


export default Index;

// https://youtu.be/8t0vNu2fCCM
// () minutes, look at the comment.