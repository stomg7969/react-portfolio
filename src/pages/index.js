import React from 'react';

import Layout from '../components/Layout';
import Landing from './landing';
import About from './about';
import Project from './project';
import Blog from './blog';

import '../styles/pages/index.scss';

const IndexPage = () => {
  window.onscroll = function () { scrollFunction() };
  // When the user scrolls down 20px from the top of the document, show the button
  const scrollFunction = () => {
    const goTopBtn = document.getElementById('go-top');
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
      goTopBtn ? goTopBtn.style.display = "block" : console.log('Go Top Button disabled due to an error');
    } else {
      goTopBtn.style.display = "none";
    }
  };
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <Layout>
      <section id="banner">
        <Landing />
      </section>

      <section id="one" className="wrapper style1 special">
        <About />
      </section>

      <section id="two" className="wrapper alt style2">
        <Project />
      </section>

      <section id="three" className="wrapper style3 special">
        <Blog />
      </section>

      <section id="cta" className="wrapper style4">
        <div className="inner">
          <header>
            <h2>Contact me here ...?</h2>
            <p>
              or just email. What can I do here?
          </p>
          </header>
          <ul className="actions stacked">
            <li>
              <a href="/#" className="button fit primary">
                Activate
            </a>
            </li>
            <li>
              <a href="/#" className="button fit">
                Learn More
            </a>
            </li>
          </ul>
        </div>
        <h2>Refactor: React Hooks! (Layout page)</h2>
        <h2>Study how the menu button works...</h2>
        <h2>...after studying the menu, change it to resume link</h2>
      </section>
      <button onClick={topFunction} id="go-top" title="Go to top">TOP</button>
    </Layout>
  );
};

export default IndexPage;
