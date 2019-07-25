import React from 'react';

import blogStyles from '../styles/pages/blog.module.scss';

import medium2 from '../assets/logo/medium2.png';

const BlogPage = () => {
  return (
    <>
      <div className="inner">
        <header className="major">
          <h2>blogs</h2>
        </header>
        <ul id={blogStyles.background} className="features">
          <li className="icon solid fa-headphones-alt">
            <h4>Deploying a static website: GatsbyJS to AWS S3 (and more)</h4>
            <p>
              Today, deploying a personal website is easier than ever. There
              are hosting websites ... However ...
            </p>
            <i>JULY 25, 2019</i><br />
            <a href="https://medium.com/@stomg7969/deploying-a-static-website-gatsbyjs-to-aws-s3-and-more-a1c496527576" target="_blank">
              <img className={blogStyles.blogImage} src={medium2} alt="medium word logo" />
            </a>
          </li>
          <li className="icon fa-paper-plane">
            <h4>Creating a multi-filter function to filter ...</h4>
            <p>
              While building the site, my biggest challenge was writing a filter()
              function where customers can click on tags to narrow down ...
            </p>
            <i>MAY 11, 2019</i><br />
            <a href="https://medium.com/better-programming/creating-a-multi-filter-function-to-filter-out-multiple-attributes-javascript-react-rails-5aad8e272142" target="_blank">
              <img className={blogStyles.blogImage} src={medium2} alt="medium word logo" />
            </a>
          </li>
          <li className="icon solid fa-laptop">
            <h4>Use axios.js for your HTTP requests!</h4>
            <p>
              When I first learned Javascript, I developed an application without
              using any external libraries or frameworks. ...
            </p>
            <i>MAY 21, 2019</i><br />
            <a href="https://medium.com/@stomg7969/use-axios-js-for-your-http-requests-1c56e47433e2" target="_blank">
              <img className={blogStyles.blogImage} src={medium2} alt="medium word logo" />
            </a>
          </li>
          <li className="icon solid fa-code">
            <h4>Use your time more efficiently (Javascript Frontend)</h4>
            <p>
              When you have to work under time pressure, it would be more productive
              if ...
            </p>
            <i>MARCH 26, 2019</i><br />
            <a href="https://medium.com/@stomg7969/use-your-time-more-efficiently-javascript-frontend-8274ba2e75f9" target="_blank">
              <img className={blogStyles.blogImage} src={medium2} alt="medium word logo" />
            </a>
          </li>
          {/* <li className="icon fa-heart">
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
          </li> */}
        </ul>
      </div>
    </>
  );
};
export default BlogPage;