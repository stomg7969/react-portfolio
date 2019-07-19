import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import About from '../components/about';

import { config } from '../../config';
import '../styles/pages/index.scss';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';

const IndexPage = () => {
  window.onscroll = function () { scrollFunction() };
  // When the user scrolls down 20px from the top of the document, show the button
  const scrollFunction = () => {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
      document.getElementById("go-top").style.display = "block";
    } else {
      document.getElementById("go-top").style.display = "none";
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
        <div className="inner">
          <h2>{config.heading}</h2>
          <p>{config.subHeading}</p>
          <ul className="actions special">
            <li>
              <Scroll type="id" element="one">
                <a href="/#" className="button primary">
                  Explore
              </a>
              </Scroll>
            </li>
          </ul>
        </div>
        <Scroll type="id" element="one">
          <a href="#one" className="more">
            Learn More
        </a>
        </Scroll>
      </section>

      <section id="one" className="wrapper style1 special">
        <div className="inner">
          <About />
        </div>
      </section>

      <section id="two" className="wrapper alt style2">
        <section className="spotlight">
          <div className="image">
            <img src={pic1} alt="" />
          </div>
          <div className="content">
            <h2>
              Remove Picture
          </h2>
            <p>
              All the projects.
          </p>
            <p>List them into each section (no flex)</p>
            <p>- project 1</p>
          </div>
        </section>
        <section className="spotlight">
          <div className="image">
            <img src={pic2} alt="" />
          </div>
          <div className="content">
            <h2>
              Tortor dolore feugiat
          </h2>
            <p>
              - project 2
          </p>
          </div>
        </section>
        <section className="spotlight">
          <div className="image">
            <img src={pic3} alt="" />
          </div>
          <div className="content">
            <h2>
              Augue eleifend aliquet
          </h2>
            <p>
              - project 3
          </p>
          </div>
        </section>
      </section>

      <section id="three" className="wrapper style3 special">
        <div className="inner">
          <header className="major">
            <h2>blogs</h2>
            <p>
              list of blogs from medium (maybe the most recent one?)
          </p>
            <p>My blogs aren't that good except one, should not list?</p>
          </header>
          <ul className="features">
            <li className="icon fa-paper-plane">
              <h3>Arcu accumsan</h3>
              <p>
                Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
            </li>
            <li className="icon solid fa-laptop">
              <h3>Ac Augue Eget</h3>
              <p>
                Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
            </li>
            <li className="icon solid fa-code">
              <h3>Mus Scelerisque</h3>
              <p>
                Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
            </li>
            <li className="icon solid fa-headphones-alt">
              <h3>Mauris Imperdiet</h3>
              <p>
                Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
            </li>
            <li className="icon fa-heart">
              <h3>Aenean Primis</h3>
              <p>
                Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
            </li>
            <li className="icon fa-flag">
              <h3>Tortor Ut</h3>
              <p>
                Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
            </li>
          </ul>
        </div>
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
      </section>
      <button onClick={topFunction} id="go-top" title="Go to top">TOP</button>
    </Layout>
  );
};

export default IndexPage;
